import Layout from '@/components/cms/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
