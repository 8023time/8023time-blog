import React from 'react';

export interface PolaroidPhoto {
  id: string;
  imageUrl: string;
  timestamp: number;
  caption: string;
  x: number;
  y: number;
  rotation: number;
  isDeveloping: boolean;
}

export interface CameraProps {
  onCapture: (blob: Blob) => void;
  isProcessing: boolean;
}

export interface PhotoWallProps {
  photos: PolaroidPhoto[];
  onUpdatePhoto: (id: string, updates: Partial<PolaroidPhoto>) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}
