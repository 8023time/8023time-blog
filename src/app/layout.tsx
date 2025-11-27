import '@styles/index.css';
import type { ReactNode } from 'react';
import { consoleBrandApp } from '@lib/console-brand';

export default function RootLayout({ children }: { children: ReactNode }) {
  consoleBrandApp()();

  return <>{children}</>;
}
