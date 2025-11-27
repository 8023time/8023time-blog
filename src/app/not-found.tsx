import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex h-full flex-col items-center justify-center gap-2'>
      <h2 className='text-xl font-semibold'>404 未找到</h2>
      <p>亲, 未能找到对应的页面</p>
      <Link
        href='/dashboard/invoices'
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
      >
        返回
      </Link>
    </main>
  );
}
