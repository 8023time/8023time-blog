import { useState, useEffect } from 'react';

export interface watermarkProps {
  content: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
  rotate?: number;
  zIndex?: number;
  gapX?: number;
  gapY?: number;
}

export const defaultWatermarkProps = (): Partial<watermarkProps> => {
  const { width, height } = document.documentElement.getBoundingClientRect();
  return {
    width: width,
    height: height,
    fontSize: 16,
    fontColor: '#000',
    rotate: 0,
    zIndex: 1,
    gapX: 0,
    gapY: 0,
  };
};

export const useWatermark = (options: watermarkProps) => {
  const [watermark, setWatermark] = useState<watermarkProps>(options);
  const opts = Object.assign({}, defaultWatermarkProps(), watermark);
  const updataWatermark = (newOps: Partial<watermarkProps>) => {
    setWatermark({
      ...opts,
      ...newOps,
    });
  };

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = opts.width!;
    canvas.height = opts.height!;

    // 默认
    //默认
    ctx.translate(opts.gapX! / 2, opts.gapY! / 2);
    ctx.rotate((opts.rotate! * Math.PI) / 180);
    ctx.font = `${opts.fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = opts.fontColor!;
    ctx.globalAlpha = 0.15;
    ctx.fillText(opts.content, 0, 0);
    const watermarkDiv = document.createElement('div');
    watermarkDiv.id = 'watermark';
    watermarkDiv.style.position = 'fixed';
    watermarkDiv.style.top = '0';
    watermarkDiv.style.left = '0';
    watermarkDiv.style.width = `${opts.width}px`;
    watermarkDiv.style.height = `${opts.height}px`;
    watermarkDiv.style.pointerEvents = 'none';
    watermarkDiv.style.zIndex = `${opts.zIndex}`;
    watermarkDiv.style.overflow = 'hidden';
    watermarkDiv.style.backgroundImage = `url(${canvas.toDataURL()})`;
    watermarkDiv.style.backgroundSize = `${opts.gapX}px ${opts.gapY}px`;
    document.body.appendChild(watermarkDiv);
  }, [opts]);

  return [opts, updataWatermark] as const;
};
