import HomePage from './Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首页',
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
