import { CMSLayout } from '@components/cms/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CMSLayout>{children}</CMSLayout>
    </>
  );
}
