import { cn } from '@lib/class-name';
import type { Metadata } from 'next';
import { geistSans } from '@lib/text-font';

export const metadata: Metadata = {
  title: {
    template: '%s - CMS',
    default: 'CMS',
  },
  description: 'Backend management panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body
          className={cn(
            'theme-transition',
            'dark:bg-gray-900 dark:text-gray-100',
            'min-h-screen w-full overflow-x-hidden antialiased',
            geistSans.className,
          )}
        >
          {children}
        </body>
      </html>
    </>
  );
}
