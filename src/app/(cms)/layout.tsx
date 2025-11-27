import type { Metadata } from 'next';

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
        <body>{children}</body>
      </html>
    </>
  );
}
