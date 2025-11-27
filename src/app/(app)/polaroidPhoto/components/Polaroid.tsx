'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';
import type { PolaroidPhoto } from '../type';

// Static Icon Components
const Download = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
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
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='7 10 12 15 17 10' />
    <line x1='12' x2='12' y1='15' y2='3' />
  </svg>
);

const Loader2 = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
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
    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
  </svg>
);

const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
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
    <path d='M18 6 6 18' />
    <path d='m6 6 12 12' />
  </svg>
);

interface PolaroidProps {
  photo: PolaroidPhoto;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onDragEnd: (id: string, x: number, y: number) => void;
  onDelete: (id: string) => void;
}

export const Polaroid: React.FC<PolaroidProps> = ({ photo, containerRef, onDragEnd, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const downloadImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = photo.imageUrl;
    link.download = `polaroid-${photo.timestamp}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(photo.id);
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      initial={{
        x: photo.x,
        y: photo.y,
        scale: 0.5,
        opacity: 0,
        rotate: 0,
      }}
      animate={{
        x: photo.x,
        y: photo.y,
        scale: 1,
        opacity: 1,
        rotate: photo.rotation,
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      onDragEnd={(_e, info) => {
        // Calculate position relative to parent to save state
        // In a real app, we might use getBoundingClientRect,
        // but here we trust framer's offset for simplicity in visual placement
        onDragEnd(photo.id, photo.x + info.offset.x, photo.y + info.offset.y);
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='pointer-events-auto absolute z-20 cursor-move touch-none select-none'
      style={{ width: '240px' }}
    >
      <div className='relative bg-white p-3 pb-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
        {/* Photo Area */}
        <div className='relative mb-3 aspect-[4/5] w-full overflow-hidden bg-gray-900'>
          <img
            src={photo.imageUrl}
            alt='Memory'
            className={`h-full w-full object-cover ${photo.isDeveloping ? 'developing-photo' : ''}`}
            draggable={false}
          />

          {/* Glossy Overlay */}
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent' />
        </div>

        {/* Caption Area */}
        <div className='flex h-8 items-center justify-center text-center'>
          {photo.caption ? (
            <p className='handwritten -rotate-1 transform text-xl text-gray-700'>{photo.caption}</p>
          ) : (
            <Loader2 className='h-4 w-4 animate-spin text-gray-400' />
          )}
        </div>

        {/* Timestamp (Tiny) */}
        <div className='absolute right-3 bottom-2 font-mono text-[10px] text-gray-400'>
          {new Date(photo.timestamp).toLocaleDateString()}
        </div>

        {/* Hover Controls */}
        {isHovered && (
          <>
            {/* Delete Button (Top Left) */}
            <button
              onClick={handleDelete}
              className='absolute -top-3 -left-3 z-30 rounded-full bg-red-500 p-2 text-white shadow-md transition-transform hover:scale-110 hover:bg-red-600'
              title='Delete photo'
            >
              <X size={14} />
            </button>

            {/* Download Button (Top Right) */}
            <button
              onClick={downloadImage}
              className='absolute -top-3 -right-3 z-30 rounded-full bg-gray-800 p-2 text-white shadow-md transition-transform hover:scale-110 hover:bg-gray-700'
              title='Download raw image'
            >
              <Download size={14} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};
