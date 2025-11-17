import React, { useState, useRef, useMemo, useLayoutEffect, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { cn } from '@utils/className';

/** @description: 位置类型 */
export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

/** @description: Tooltip组件props */
export interface TooltipProps {
  content: ReactNode | string;
  placement?: TooltipPlacement;
  enterDelay?: number;
  leaveDelay?: number;
  arrow?: boolean;
}

/** @description: 默认props */
const defaultTooltipProps = {
  content: '',
  placement: 'top' as TooltipPlacement,
  enterDelay: 100,
  leaveDelay: 300,
  arrow: true,
} satisfies Partial<TooltipProps>;

const Tooltip: React.FC<
  TooltipProps & {
    children: ReactNode;
    className?: string;
  }
> = ({
  content = defaultTooltipProps.content,
  placement = defaultTooltipProps.placement,
  enterDelay = defaultTooltipProps.enterDelay,
  leaveDelay = defaultTooltipProps.leaveDelay,
  arrow = defaultTooltipProps.arrow,
  className = '',
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timer = useRef<{ in?: NodeJS.Timeout; out?: NodeJS.Timeout }>({});

  /** 清除定时器 */
  const clearTimers = () => {
    clearTimeout(timer.current.in);
    clearTimeout(timer.current.out);
  };

  /** 计算位置 */
  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    if (!trigger || !tooltip) {
      requestAnimationFrame(updatePosition);
      return;
    }

    const tRect = trigger.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // 修正: arrowSize 是箭头边框大小 (6px), visualGap 是本体与触发器间的视觉距离 (4px)
    const arrowSize = arrow ? 6 : 0;
    const visualGap = arrow ? 4 : 3;
    const totalOffset = visualGap + arrowSize; // 总偏移量 (例如: 4 + 6 = 10px)

    const positions: Record<TooltipPlacement, { top: number; left: number }> = {
      top: { top: tRect.top - tipRect.height - totalOffset, left: tRect.left + (tRect.width - tipRect.width) / 2 },
      bottom: { top: tRect.bottom + totalOffset, left: tRect.left + (tRect.width - tipRect.width) / 2 },
      left: {
        top: tRect.top + (tRect.height - tipRect.height) / 2,
        left: tRect.left - tipRect.width - totalOffset,
      },
      right: { top: tRect.top + (tRect.height - tipRect.height) / 2, left: tRect.right + totalOffset },

      topLeft: { top: tRect.top - tipRect.height - totalOffset, left: tRect.left },
      topRight: { top: tRect.top - tipRect.height - totalOffset, left: tRect.right - tipRect.width },
      bottomLeft: { top: tRect.bottom + totalOffset, left: tRect.left },
      bottomRight: { top: tRect.bottom + totalOffset, left: tRect.right - tipRect.width },

      leftTop: { top: tRect.top, left: tRect.left - tipRect.width - totalOffset },
      leftBottom: { top: tRect.bottom - tipRect.height, left: tRect.left - tipRect.width - totalOffset },
      rightTop: { top: tRect.top, left: tRect.right + totalOffset },
      rightBottom: { top: tRect.bottom - tipRect.height, left: tRect.right + totalOffset },
    };

    const next = positions[placement];
    tooltip.style.top = `${next.top + scrollY}px`;
    tooltip.style.left = `${next.left + scrollX}px`;
    tooltip.style.visibility = 'visible';
  }, [placement, arrow]);

  /** hover 控制 */
  const show = () => {
    clearTimers();
    if (!mounted) setMounted(true);
    timer.current.in = setTimeout(() => setVisible(true), enterDelay);
  };
  const hide = () => {
    clearTimers();
    timer.current.out = setTimeout(() => setVisible(false), leaveDelay);
  };

  useLayoutEffect(() => {
    if (!visible) {
      if (tooltipRef.current) {
        tooltipRef.current.style.visibility = 'hidden';
      }
      return;
    }

    updatePosition();

    const handle = () => requestAnimationFrame(updatePosition);

    window.addEventListener('resize', handle, { passive: true });
    window.addEventListener('scroll', handle, { passive: true });

    return () => {
      clearTimers();
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle);
    };
  }, [visible, updatePosition]);

  // 创建持久化容器
  useEffect(() => {
    if (!mounted) return;

    const div = document.createElement('div');
    document.body.appendChild(div);
    containerRef.current = div;

    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, [mounted]);

  /** Tooltip 本体 */
  const tooltipNode = useMemo(() => {
    const colorClass = 'border-gray-800 dark:border-white'; // 颜色基类

    const Arrow = arrow ? (
      <div
        className={cn(
          // 基类：零宽高，6px 边框，所有边框默认透明
          `absolute h-0 w-0 border-[6px] border-transparent`,

          // 箭头颜色和定位逻辑
          // 亮色模式：深色箭头 (bg-gray-800)；暗色模式：浅色箭头 (bg-white)
          // 箭头偏移量必须是 -6px，使其尖端与 Tooltip 边框对齐

          // 垂直定位 (top/bottom)
          placement.startsWith('top') && `border-t- bottom-[-6px]` + colorClass,
          placement.startsWith('bottom') && `border-b- top-[-6px]` + colorClass,

          // 水平定位 (left/right)
          placement.startsWith('left') && `border-l- right-[-6px]` + colorClass,
          placement.startsWith('right') && `border-r- left-[-6px]` + colorClass,

          // 居中/角对齐
          (placement === 'top' || placement === 'bottom') && 'left-[calc(50%-6px)]',
          (placement === 'left' || placement === 'right') && 'top-[calc(50%-6px)]',

          // 角对齐
          (placement === 'topLeft' || placement === 'bottomLeft') && 'left-[8px]',
          (placement === 'topRight' || placement === 'bottomRight') && 'right-[8px]',
          (placement === 'leftTop' || placement === 'rightTop') && 'top-[8px]',
          (placement === 'leftBottom' || placement === 'rightBottom') && 'bottom-[8px]',
        )}
      />
    ) : null;

    return (
      <div
        ref={tooltipRef}
        className={cn(
          `absolute z-1000 max-w-xs transform rounded-md px-3 py-2 text-sm shadow-lg transition-all duration-200 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`,

          // ========== 颜色模式修正 ==========
          // 亮色模式: 深色背景, 亮色文字
          `bg-gray-800 text-white`,
          // 暗色模式: 亮色背景, 深色文字
          `dark:bg-white dark:text-gray-900`,

          className,
        )}
        style={{
          visibility: 'hidden', // 初始隐藏
        }}
        role='tooltip'
        aria-hidden={!visible}
      >
        {Arrow}
        <div>{content}</div>
      </div>
    );
  }, [visible, content, className, arrow, placement]);

  return (
    <>
      <div ref={triggerRef} onMouseEnter={show} onMouseLeave={hide} className='inline-block'>
        {children}
      </div>
      {mounted && containerRef.current && createPortal(tooltipNode, containerRef.current)}
    </>
  );
};

export default React.memo(Tooltip);
