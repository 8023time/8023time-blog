import Root from './Root';
import type { ReactNode } from 'react';

export default function CMSLayout({ children }: { children: ReactNode }) {
  return <Root>{children}</Root>;
}
