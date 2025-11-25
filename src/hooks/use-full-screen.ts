import { useState, useEffect, useCallback } from 'react';

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));

  // 监控全屏状态（确保 ESC / F11 / 外部退出能感知）
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
