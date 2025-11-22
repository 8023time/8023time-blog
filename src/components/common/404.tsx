import { NavLink } from 'react-router';
import { useEffect, useRef } from 'react';

export default function NotFound404() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // 噪声生成器
  const generateNoise = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const imgData = ctx.createImageData(w, h);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 255;
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
      imgData.data[i + 3] = 25; // 透明度
    }
    return imgData;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const noise = generateNoise(ctx, width, height);
    ctx.putImageData(noise, 0, 0);

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className='h-full w-full overflow-hidden bg-white'>
      {/* 视频级噪声场 */}
      <canvas ref={canvasRef} className='fixed inset-0 -z-10 opacity-[0.18]' />

      {/* 中心内容 */}
      <div className='fixed inset-0 z-10 flex flex-col items-center justify-center text-center'>
        <h1 className='text-[18vw] font-bold tracking-wider text-neutral-900 mix-blend-overlay select-none'>404</h1>

        <p className='mt-4 text-lg text-neutral-600'>页面消失在数据的迷雾中</p>

        <NavLink
          to='/'
          className='mt-6 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800'
        >
          返回首页
        </NavLink>
      </div>

      {/* 精致 CSS */}
      <style>{`
        @media (min-width: 800px) {
          h1 {
            font-size: 15vw;
          }
        }
      `}</style>
    </div>
  );
}
