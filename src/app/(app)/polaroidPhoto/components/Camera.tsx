'use client';

import React, { useEffect, useRef, useState } from 'react';

// Static Icon Components
const RefreshCw = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
    <path d='M21 3v5h-5' />
    <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
    <path d='M8 16H3v5' />
  </svg>
);

interface CameraProps {
  onCapture: (dataUrl: string) => void;
  isProcessing: boolean;
}

export const Camera: React.FC<CameraProps> = ({ onCapture, isProcessing }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>('');
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user',
        },
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setError('');
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Could not access camera. Please allow permissions.');
    }
  };

  const takePicture = () => {
    if (!videoRef.current || !canvasRef.current || isProcessing) return;

    setFlash(true);
    setTimeout(() => setFlash(false), 150);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Flip horizontally for mirror effect if using front camera
      context.translate(canvas.width, 0);
      context.scale(-1, 1);

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      onCapture(dataUrl);
    }
  };

  return (
    <div className='relative h-[340px] w-[320px] select-none'>
      {/* Ejection Slot (Behind the front face) */}
      <div className='absolute top-[-10px] left-1/2 z-0 h-[20px] w-[180px] -translate-x-1/2 transform rounded-full bg-gray-900'></div>

      {/* Camera Body - Retro Cream Color */}
      <div className='absolute inset-0 z-10 flex flex-col items-center overflow-hidden rounded-[40px] border-b-8 border-[#e6ddd0] bg-[#f2ece1] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]'>
        {/* Texture overlay */}
        <div
          className='pointer-events-none absolute inset-0 opacity-10'
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
        ></div>

        {/* Top Details */}
        <div className='relative flex h-24 w-full items-center justify-between px-6 pt-4'>
          {/* Flash Unit */}
          <div className='group relative h-14 w-20 overflow-hidden rounded-lg border-4 border-gray-300 bg-gray-200 shadow-inner'>
            <div className='absolute inset-0 -translate-x-full transform bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:translate-x-full group-hover:opacity-100'></div>
            <div className='flex h-full w-full items-center justify-center'>
              <div className='h-4 w-12 rounded bg-gray-800/20 blur-sm'></div>
            </div>
          </div>

          {/* Viewfinder & Sensor */}
          <div className='flex items-center gap-2'>
            <div className='h-3 w-3 rounded-full bg-black'></div>
            <div className='relative h-12 w-12 overflow-hidden rounded-full border-4 border-gray-400 bg-black shadow-lg'>
              {/* Fake glass reflection */}
              <div className='absolute top-1 left-2 h-3 w-3 rounded-full bg-white opacity-30 blur-[1px]'></div>
            </div>
          </div>
        </div>

        {/* Lens Ring (The Big Circle) */}
        <div className='relative mt-2'>
          {/* Outer Rose Gold / Copper Ring */}
          <div className='flex h-48 w-48 items-center justify-center rounded-full border-4 border-[#dfc4b2] bg-[#e8d0c0] shadow-lg'>
            {/* Inner Chrome Rings */}
            <div className='flex h-40 w-40 items-center justify-center rounded-full border border-gray-400 bg-gradient-to-b from-gray-300 to-gray-100 shadow-inner'>
              <div className='relative h-36 w-36 overflow-hidden rounded-full border-[6px] border-[#333] bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]'>
                {/* The actual Webcam Video */}
                {error ? (
                  <div className='flex h-full w-full items-center justify-center p-2 text-center text-xs text-white'>
                    {error}{' '}
                    <button onClick={startCamera} className='ml-1'>
                      <RefreshCw size={12} />
                    </button>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className='h-full w-full scale-x-[-1] transform object-cover'
                  />
                )}

                {/* Lens Reflection Overlay */}
                <div className='pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]'></div>
                <div className='absolute top-8 right-8 h-4 w-8 rotate-45 rounded-full bg-white opacity-20 blur-md'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Shutter Button */}
        <div className='absolute bottom-10 left-8'>
          <button
            onClick={takePicture}
            disabled={isProcessing || !stream}
            className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#e8d0c0] shadow-lg transition-all duration-100 active:scale-95 ${isProcessing ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-[#d68c85] hover:bg-[#c77b74] active:bg-[#b56a63]'} `}
          >
            <div className='h-12 w-12 rounded-full border-2 border-black/10 bg-white/10'></div>
          </button>
          {/* Hand Icon Hint */}
          <div className='pointer-events-none absolute -bottom-8 left-4 animate-bounce opacity-50'>
            <div className='rounded bg-white px-2 py-1 text-[10px] font-bold text-gray-600 shadow'>CLICK</div>
          </div>
        </div>

        {/* Branding */}
        <div className='absolute right-8 bottom-6'>
          <span className='font-mono text-sm font-bold tracking-widest text-gray-400 opacity-60'>INSTA-AI</span>
        </div>
      </div>

      {/* Flash Overlay (Whole Screen) */}
      {flash && (
        <div className='animate-out fade-out pointer-events-none fixed inset-0 z-50 bg-white duration-300'></div>
      )}

      <canvas ref={canvasRef} className='hidden' />
    </div>
  );
};
