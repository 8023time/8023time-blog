import Link from 'next/link';

export default function TestPage() {
  return (
    <>
      {/* 原页面中间内容（展示柜标题+描述+卡片） */}
      <div className='mt-24'>
        <div className='mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase'>Showcase</div>

        {/* 标题 */}
        <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <h1 className='mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl'>
            你可以用 Tailwind CSS 构建任何东西。
          </h1>
        </div>

        {/* 描述 */}
        <div className='relative mt-10 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <p className='prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400'>
            几乎什么东西都可以，但你不能用它来建造一艘宇宙飞船。不过你绝对可以用它建造宇宙飞船的网站，
            <Link href='https://www.jpl.nasa.gov/' target='_blank' rel='noopener noreferrer'>
              NASA
            </Link>
            就是这么做的。
          </p>
        </div>

        {/* 展示柜卡片（原页面4个卡片，此处省略重复代码，保留结构） */}
        <div className='mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* 卡片1：Base UI（原代码复制此处） */}
          {/* 卡片2：Graphite（原代码复制此处） */}
          {/* 卡片3：Clerk（原代码复制此处） */}
          {/* 卡片4：Resend（原代码复制此处） */}
        </div>
      </div>
    </>
  );
}
