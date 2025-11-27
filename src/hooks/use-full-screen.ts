'use client';

import { useState, useEffect, useCallback } from 'react';

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(() => {
    if (typeof document === 'undefined') return false;
    return Boolean(document.fullscreenElement);
  });

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const enter = useCallback(() => {
    return document.documentElement.requestFullscreen();
  }, []);

  const exit = useCallback(() => {
    if (document.fullscreenElement) {
      return document.exitFullscreen();
    }
  }, []);

  const toggle = useCallback(() => {
    if (document.fullscreenElement) return exit();
    return enter();
  }, [enter, exit]);

  return {
    isFullscreen,
    enter,
    exit,
    toggle,
  };
}
