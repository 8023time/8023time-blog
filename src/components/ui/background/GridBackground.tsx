export type { FC } from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * @description: 定义CanvasStrokeStyle类型
 */
type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

/**
 * @description: 定义网格偏移量类型
 */
interface GridOffset {
  x: number;
  y: number;
}

/**
 * @description: 网格背景组件的属性
 */
export interface GridBackgroundProps {
  /**
   * @description: 动画的方向
   * @default: "right"
   */
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  /**
   * @description: 动画的速度 (单位: 像素/秒)
   * @default: 1
   */
  speed?: number;
  /**
   * @description: 网格线的颜色
   * @default: "#999"
   */
  borderColor?: CanvasStrokeStyle;
  /**
   * @description: 网格线的大小 (单位: 像素)
   * @default: 40
   */
  squareSize?: number;
  /**
   * @description: 鼠标悬停时网格线的颜色
   * @default: "#222"
   */
  hoverFillColor?: CanvasStrokeStyle;
}

/**
 * @description: 背景网格组件的默认属性
 */
const defaultProps = {
  direction: 'right',
  speed: 1,
  borderColor: '#999',
  squareSize: 40,
  hoverFillColor: '#222',
};

export const FluidGrid: React.FC<GridBackgroundProps> = ({
  direction = defaultProps.direction,
  speed = defaultProps.speed,
  borderColor = defaultProps.borderColor,
  squareSize = defaultProps.squareSize,
  hoverFillColor = defaultProps.hoverFillColor,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);
  const [colorMode] = useState<string>('light'); // Removed setter since its logic is external

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // ------ 工具函数 ------

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width === width && canvas.height === height) return;

    canvas.width = width;
    canvas.height = height;

    numSquaresX.current = Math.ceil(width / squareSize) + 1;
    numSquaresY.current = Math.ceil(height / squareSize) + 1;
  }, [squareSize]);

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { x: offsetX, y: offsetY } = gridOffset.current;

    // Calculate the sub-square offset (0 to squareSize-1)
    const subOffsetX = offsetX % squareSize;
    const subOffsetY = offsetY % squareSize;

    // The logic below can be slightly optimized: instead of calculating `x` and `y` from `startX/Y`
    // and then recalculating the drawing position with `subOffset`, we can iterate
    // from the canvas edge and use the sub-offset directly.

    let gridIndexX = 0;
    for (let x = -subOffsetX; x < canvas.width; x += squareSize) {
      let gridIndexY = 0;
      for (let y = -subOffsetY; y < canvas.height; y += squareSize) {
        // Check for hover
        if (
          hoveredSquareRef.current &&
          hoveredSquareRef.current.x === gridIndexX &&
          hoveredSquareRef.current.y === gridIndexY
        ) {
          ctx.fillStyle = hoverFillColor;
          ctx.fillRect(x, y, squareSize, squareSize);
        }

        // Draw border
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(x, y, squareSize, squareSize);

        gridIndexY++;
      }
      gridIndexX++;
    }

    // Gradient Overlay (kept as is for logic preservation)
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
    );
    if (colorMode === 'dark') {
      // gradient.addColorStop(0, 'rgba(60, 60, 90, 0)');
      gradient.addColorStop(1, 'rgba(25, 25, 40, 0.95)');
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(1, 'rgba(245, 247, 250, 1)');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [borderColor, hoverFillColor, squareSize, colorMode]);

  const updateAnimation = useCallback(
    function animate() {
      const effectiveSpeed = Math.max(speed, 0.1);
      const offset = gridOffset.current;
      const size = squareSize;

      const modulo = (n: number, m: number) => ((n % m) + m) % m;

      switch (direction) {
        case 'right':
          offset.x = modulo(offset.x - effectiveSpeed, size);
          break;
        case 'left':
          offset.x = modulo(offset.x + effectiveSpeed, size);
          break;
        case 'up':
          offset.y = modulo(offset.y + effectiveSpeed, size);
          break;
        case 'down':
          offset.y = modulo(offset.y - effectiveSpeed, size);
          break;
        case 'diagonal':
          offset.x = modulo(offset.x - effectiveSpeed, size);
          offset.y = modulo(offset.y - effectiveSpeed, size);
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(animate);
    },
    [direction, speed, squareSize, drawGrid],
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const { x: offsetX, y: offsetY } = gridOffset.current;

      const subOffsetX = offsetX % squareSize;
      const subOffsetY = offsetY % squareSize;

      const finalHoveredSquareX = Math.floor((mouseX + subOffsetX) / squareSize);
      const finalHoveredSquareY = Math.floor((mouseY + subOffsetY) / squareSize);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== finalHoveredSquareX ||
        hoveredSquareRef.current.y !== finalHoveredSquareY
      ) {
        hoveredSquareRef.current = {
          x: finalHoveredSquareX,
          y: finalHoveredSquareY,
        };
        drawGrid();
      }
    },
    [squareSize, drawGrid],
  );

  const handleMouseLeave = useCallback(() => {
    if (hoveredSquareRef.current) {
      hoveredSquareRef.current = null;
      drawGrid(); // Force a redraw to clear the hover
    }
  }, [drawGrid]);

  // Use a stable ref for event handlers to attach/detach efficiently
  const handleMouseMoveRef = useRef(handleMouseMove);
  const handleMouseLeaveRef = useRef(handleMouseLeave);
  handleMouseMoveRef.current = handleMouseMove;
  handleMouseLeaveRef.current = handleMouseLeave;

  // ------ 初始化与清理函数 ------

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext('2d');
    resizeCanvas();

    // Attach stable event listeners on the canvas DOM element
    const currentHandleMouseMove = (e: MouseEvent) => handleMouseMoveRef.current(e);
    const currentHandleMouseLeave = () => handleMouseLeaveRef.current();

    canvas.addEventListener('mousemove', currentHandleMouseMove);
    canvas.addEventListener('mouseleave', currentHandleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    requestRef.current = requestAnimationFrame(updateAnimation);

    // Return cleanup function directly
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }

      canvas.removeEventListener('mousemove', currentHandleMouseMove);
      canvas.removeEventListener('mouseleave', currentHandleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas, updateAnimation]);

  useEffect(() => {
    const cleanup = initializeCanvas();
    return cleanup;
  }, [direction, speed, borderColor, hoverFillColor, squareSize, initializeCanvas]);

  return <canvas ref={canvasRef} className='fixed inset-0 z-50 block h-full w-full border-none' />;
};
