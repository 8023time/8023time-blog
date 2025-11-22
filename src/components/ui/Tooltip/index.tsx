import { cn } from '@/utils/className';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { tooltipStyle } from './style/index';
import type { TooltipProps, TooltipPlacement } from './interface';
import React, { useState, useRef, useMemo, useLayoutEffect, useCallback, useEffect } from 'react';

const Tooltip: React.FC<
  TooltipProps & {
    children: ReactNode;
    className?: string;
  }
> = (props) => {
  const {
    children,
    content,
    placement = 'top',
    enterDelay = 100,
    leaveDelay = 300,
    arrow = true,
    className,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timer = useRef<{ in?: NodeJS.Timeout; out?: NodeJS.Timeout }>({});

  // 清除定时器
  const clearTimers = () => {
    clearTimeout(timer.current.in);
    clearTimeout(timer.current.out);
  };

  //================= 计算位置 =================//

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

    const arrowSize = arrow ? 6 : 0;
    const visualGap = arrow ? 4 : 3;
    const totalOffset = visualGap + arrowSize;

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

  //=============== 显示/隐藏 tooltip =================//

  const show = () => {
    clearTimers();
    if (!mounted) setMounted(true);
    timer.current.in = setTimeout(() => setVisible(true), enterDelay);
  };
  const hide = () => {
    clearTimers();
    timer.current.out = setTimeout(() => setVisible(false), leaveDelay);
  };

  //================= 挂载与刷新 =================//

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

  //=============== 样式类名 =================//

  const classes = tooltipStyle({ visible, placement });

  //=============== 渲染 tooltip 节点 ===============//

  const tooltipNode = useMemo(() => {
    return (
      <div
        ref={tooltipRef}
        className={cn(classes.content(), className)}
        style={{ visibility: visible ? 'visible' : 'hidden' }}
        role='tooltip'
        aria-hidden={!visible}
      >
        {arrow && <span className={classes.arrow()} aria-hidden />}
        <div>{content}</div>
      </div>
    );
  }, [visible, content, className, arrow, classes]);

  return (
    <>
      <div ref={triggerRef} onMouseEnter={show} onMouseLeave={hide} {...rest} className={classes.wrapper()}>
        {children}
      </div>
      {mounted && containerRef.current && createPortal(tooltipNode, containerRef.current)}
    </>
  );
};

export default React.memo(Tooltip);
