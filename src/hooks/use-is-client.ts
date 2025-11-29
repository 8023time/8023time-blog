import { useState } from 'react';

export function useIsClient() {
  const [isClient] = useState(() => typeof window !== 'undefined');

  return isClient;
}
