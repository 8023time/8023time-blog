import type { Metadata } from 'next';
import HomePage from '@/app/(app)/Home';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
