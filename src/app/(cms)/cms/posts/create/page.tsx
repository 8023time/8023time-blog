import type { Metadata } from 'next';
import { CreatePostPage } from './Create';

export const metadata: Metadata = {
  title: '发布文章',
};

export default function Page() {
  return (
    <>
      <CreatePostPage />
    </>
  );
}
