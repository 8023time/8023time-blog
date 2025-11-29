'use client';

import Link from 'next/link';
import { useId } from 'react';
import { useState, useRef } from 'react';
import type { PolaroidPhoto } from './type';
import { Camera } from './components/Camera';
import { Polaroid } from './components/Polaroid';
import { useIsClient } from '@/hooks/use-is-client';
import { motion, AnimatePresence } from 'motion/react';
import { SectionDivider } from '@components/layout/SectionDivider';

// Mock Captions since we removed the AI library
const MOCK_CAPTIONS = [
  'Pure vibes.',
  'Frozen in time.',
  'Instant classic.',
  'Good times.',
  'Forever mood.',
  'Snapshot moment.',
  'Retro love.',
  'Caught in the act.',
  'Making memories.',
  'Just perfect.',
  'Stay wild.',
  'Sunday funday.',
  'Golden hour.',
  'Smile!',
  'Unforgettable.',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generatePhotoCaption = async (_base64Image: string): Promise<string> => {
  // Simulate network delay for "processing" feel
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return a random caption
  const randomIndex = Math.floor(Math.random() * MOCK_CAPTIONS.length);
  return MOCK_CAPTIONS[randomIndex];
};

export default function PolaroidPhoto() {
  const [photos, setPhotos] = useState<PolaroidPhoto[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();

  const reactId = useId(); // 每个组件实例固定一次
  const [counter, setCounter] = useState(0);

  const generateUniqueId = () => {
    // 保证每次 capture 都是唯一的
    const newId = `${reactId}-${counter}`;
    setCounter((c) => c + 1);
    return newId;
  };

  const handleCapture = async (dataUrl: string) => {
    if (isProcessing) return;
    setIsProcessing(true);

    let _innerHeight = 0;

    if (isClient) {
      _innerHeight = window.innerHeight;
    }

    // 1. Create the photo object immediately for the animation
    const newPhoto: PolaroidPhoto = {
      id: generateUniqueId(),
      imageUrl: dataUrl,
      timestamp: Date.now(),
      caption: '', // Empty initially
      x: 50, // Start near the camera ejection point relative to container
      y: _innerHeight - 450, // Approximate top of camera
      rotation: (Math.random() - 0.5) * 10, // Random slight tilt
      isDeveloping: true,
    };

    // Add to state to trigger render
    setPhotos((prev) => [...prev, newPhoto]);

    // 2. Animate "Ejection" logic
    // We'll simulate the ejection by updating its position after a brief moment
    setTimeout(() => {
      setPhotos((prev) =>
        prev.map((p) =>
          p.id === newPhoto.id
            ? { ...p, y: p.y - 200, x: p.x + Math.random() * 50 } // Move up and slightly random X
            : p,
        ),
      );
    }, 100);

    // 3. Stop "developing" visual effect after 5 seconds
    setTimeout(() => {
      setPhotos((prev) => prev.map((p) => (p.id === newPhoto.id ? { ...p, isDeveloping: false } : p)));
      setIsProcessing(false);
    }, 3000); // Allow next shot sooner than full develop

    // 4. Fetch Mock Caption
    try {
      const caption = await generatePhotoCaption(dataUrl);
      setPhotos((prev) => prev.map((p) => (p.id === newPhoto.id ? { ...p, caption } : p)));
    } catch (e) {
      console.error('Failed to caption', e);
      setPhotos((prev) => prev.map((p) => (p.id === newPhoto.id ? { ...p, caption: 'Memories...' } : p)));
    }
  };

  const handleDragEnd = (id: string, x: number, y: number) => {
    setPhotos((prev) => prev.map((p) => (p.id === id ? { ...p, x, y } : p)));
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className='mx-2 mt-24 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase'>8023time</div>
      <SectionDivider>
        <h1 className='mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl'>照相馆</h1>
      </SectionDivider>
      <SectionDivider className='mt-10'>
        <p className='prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400'>
          从推特上阅读到一篇文章,挺有创意的，于是把代码加到这个模块中，（
          <Link
            className='rounded-2xl bg-blue-200 p-1 underline underline-offset-2'
            target='_blank'
            href='https://x.com/ann_nnng/status/1991079810882265254?s=20'
          >
            点击此处访问原帖
          </Link>
          ）
        </p>
      </SectionDivider>
      <SectionDivider className='mt-10'>
        <div ref={containerRef} className='relative flex h-screen w-full flex-col justify-between overflow-hidden'>
          {/* Header / Instructions */}
          <div className='pointer-events-none absolute top-6 right-6 z-10'>
            <div className='rotate-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm'>
              <h1 className='handwritten text-xl font-bold text-gray-800'>My Photo Wall</h1>
            </div>
          </div>

          {/* Photo Layer */}
          <div className='pointer-events-none absolute inset-0 z-20'>
            {/* The container is pointer-events-none so clicks pass through to background,
             but individual polaroids are pointer-events-auto */}
            <AnimatePresence>
              {photos.map((photo) => (
                <Polaroid
                  key={photo.id}
                  photo={photo}
                  containerRef={containerRef}
                  onDragEnd={handleDragEnd}
                  onDelete={handleDeletePhoto}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Camera Layer (Fixed Bottom Left) */}
          <div className='absolute bottom-10 left-10 z-30'>
            {/* Invisible slot animation helper could go here */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <Camera onCapture={handleCapture} isProcessing={isProcessing} />
            </motion.div>
          </div>

          {/* Footer / Credits */}
          <div className='absolute right-4 bottom-2 z-10 font-mono text-xs text-gray-400'>Retro Cam 1.0</div>
        </div>
      </SectionDivider>
    </>
  );
}
