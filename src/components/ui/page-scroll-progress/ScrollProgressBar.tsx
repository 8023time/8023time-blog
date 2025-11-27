'use client';

import type { FC } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: FC<{ color?: string; height?: number }> = ({ color = 'bg-blue-400', height = 1 }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className={`fixed top-0 right-0 left-0 z-50 ${color}`}
      style={{ height, scaleX, transformOrigin: '0%' }}
    />
  );
};
