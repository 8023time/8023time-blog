import { useLayoutEffect, useState } from 'react';

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const checkWidth = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkWidth();

    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, [breakpoint]);

  return isMobile;
}
