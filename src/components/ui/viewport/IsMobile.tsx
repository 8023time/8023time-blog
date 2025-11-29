'use client';

import type { FC, ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-is-mobile';

export const IsMobile: FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return children;
};
