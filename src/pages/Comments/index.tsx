import type { FC } from 'react';
import { motion } from 'motion/react';
import { useMemo, useState, useRef, useLayoutEffect } from 'react';
import { SectionDivider } from '@components/layout/SectionDivider';

const data = [
  { id: 1, text: '刚到这一章，好紧张啊' },
  { id: 2, text: '谁能告诉我第5秒发生了什么？' },
  { id: 3, text: '这段配乐真好听' },
  { id: 4, text: '哈哈，这里笑死我了' },
  { id: 5, text: '原来是这个梗😂' },
  { id: 6, text: '你好，欢迎来到我的博客！' },
  { id: 7, text: '今天的天气真不错～' },
  { id: 8, text: 'React + Tailwind 很好用！' },
  { id: 9, text: '这里有很多值得学习的内容！' },
  { id: 10, text: '别忘了点赞和关注哦～' },
  { id: 11, text: '8023time 的留言区来了！' },
  { id: 12, text: '祝大家编程愉快～' },
  { id: 13, text: '有人能截个图吗？' },
  { id: 14, text: '这个地方好像很关键啊' },
  { id: 15, text: '我刚才也注意到了这个细节' },
  { id: 16, text: '这速度太快了，看不清楚' },
  { id: 17, text: '哇，这个特效做得太棒了' },
  { id: 18, text: '刚重播一遍，发现新东西' },
  { id: 19, text: '有人知道这个梗的来源吗？' },
  { id: 20, text: '这段台词好经典' },
];

const Comments: FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [maxTracks, setMaxTracks] = useState(0);

  const trackHeight = 25;

  useLayoutEffect(() => {
    if (!targetRef.current) return;

    const height = targetRef.current.clientHeight;
    setMaxTracks(Math.max(1, Math.floor(height / trackHeight)));
  }, []);

  const tracks = useMemo(() => {
    return Array.from({ length: maxTracks }, (_, i) => i);
  }, [maxTracks]);

  return (
    <>
      <div className='mx-2 mt-24 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase'>8023time</div>

      {/* title（标题） */}
      <SectionDivider>
        <h1 className='mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl'>留言区</h1>
      </SectionDivider>

      {/* description（描述） */}
      <SectionDivider className='mt-10'>
        <p className='prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400'>
          这里是留言区，欢迎大家留言。
        </p>
      </SectionDivider>

      {/* comments（评论） */}
      <SectionDivider className='mt-10 p-2'>
        <div className='flex h-auto w-full flex-col items-center justify-between border-gray-600 bg-gray-100 dark:border-gray-400 dark:bg-gray-800'>
          {/* 弹幕展示区域 */}
          <div className='relative aspect-video h-48 w-full flex-1 overflow-hidden sm:h-200' ref={targetRef}>
            {data.map((d, i) => {
              return (
                <motion.span
                  key={d.id}
                  className='absolute whitespace-nowrap'
                  style={{
                    top: `${tracks[i % tracks.length] * 25}px`,
                  }}
                  initial={{ x: window.innerWidth }}
                  animate={{ x: -500 }}
                  transition={{
                    duration: 20 + Math.random() * 12,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  {d.text}
                </motion.span>
              );
            })}
          </div>
          {/* 底部控制栏 */}
          <div className='flex w-full gap-1 border-t-1 border-t-gray-200 px-1 py-1 sm:gap-7 sm:px-4 sm:py-2 dark:border-t-gray-600'>
            {/* 左侧 */}
            <div className='flex items-center whitespace-nowrap text-gray-500'>
              <div>
                <span className='px-1'>7</span>
                人正在看
              </div>
              <div className='hidden pr-3 sm:block'>,</div>
              <div className='hidden sm:block'>
                已装填
                <span className='px-1'>20</span>
                条弹幕
              </div>
            </div>
            {/* 右侧 */}
            <div className='flex flex-1 gap-1 sm:gap-4'>
              {/* 弹幕设置 */}
              <div className='flex items-center'>
                <label className='relative flex cursor-pointer items-center select-none'>
                  <input type='checkbox' className='peer hidden' defaultChecked />

                  {/* ON */}
                  <span className='h-5 w-5 peer-checked:hidden sm:h-9 sm:w-9'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='flex items-center fill-current text-gray-400 hover:text-blue-400'
                      data-pointer='none'
                      viewBox='0 0 25 25'
                    >
                      <path
                        fillRule='evenodd'
                        d='M11.989 4.828c-.47 0-.975.004-1.515.012l-1.71-2.566a1.008 1.008 0 0 0-1.678 1.118l.999 1.5c-.681.018-1.403.04-2.164.068a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363l.906.046c1.205.063 1.808.095 3.607.095a.988.988 0 0 0 0-1.975c-1.758 0-2.339-.03-3.501-.092l-.915-.047a2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.01.342.017.65.025.88a.987.987 0 1 0 1.974-.068c-.008-.226-.016-.523-.025-.856v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.9-.032-1.743-.058-2.531-.078l1.05-1.46a1.008 1.008 0 0 0-1.638-1.177l-1.862 2.59c-.38-.004-.744-.007-1.088-.007h-.13Zm.521 4.775h-1.32v4.631h2.222v.847h-2.618v1.078h2.618l.003.678c.36.026.714.163 1.01.407h.11v-1.085h2.694v-1.078h-2.695v-.847H16.8v-4.63h-1.276a8.59 8.59 0 0 0 .748-1.42L15.183 7.8a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.294h-3.2v.98H9.33v1.43H7.472l-.308 3.453h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.005c.285.02.551.04.818.04 1.001-.067 1.562-.419 1.694-1.057.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858h1.254Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902h1.254v.902h-1.254Z'
                        clipRule='evenodd'
                      ></path>
                      <path
                        fillRule='evenodd'
                        d='M22.846 14.627a1 1 0 0 0-1.412.075l-5.091 5.703-2.216-2.275-.097-.086-.008-.005a1 1 0 0 0-1.322 1.493l2.963 3.041.093.083.007.005c.407.315 1 .27 1.354-.124l5.81-6.505.08-.102.005-.008a1 1 0 0 0-.166-1.295Z'
                        clipRule='evenodd'
                        className='text-blue-400'
                      ></path>
                    </svg>
                  </span>

                  {/* OFF */}
                  <span className='hidden h-5 w-5 peer-checked:flex sm:h-9 sm:w-9'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='fill-current text-gray-400 hover:text-blue-400'
                      data-pointer='none'
                      viewBox='0 0 25 25'
                    >
                      <path
                        fillRule='evenodd'
                        d='m8.085 4.891-.999-1.499a1.008 1.008 0 0 1 1.679-1.118l1.709 2.566c.54-.008 1.045-.012 1.515-.012h.13c.345 0 .707.003 1.088.007l1.862-2.59a1.008 1.008 0 0 1 1.637 1.177l-1.049 1.46c.788.02 1.631.046 2.53.078 1.958.069 3.468 1.6 3.74 3.507.088.613.13 2.158.16 3.276l.001.027c.01.333.017.63.025.856a.987.987 0 0 1-1.974.069c-.008-.23-.016-.539-.025-.881v-.002c-.028-1.103-.066-2.541-.142-3.065-.143-1.004-.895-1.78-1.854-1.813-2.444-.087-4.466-.13-6.064-.131-1.598 0-3.619.044-6.063.13a2.037 2.037 0 0 0-1.945 1.748c-.15 1.04-.225 2.341-.225 3.904 0 1.874.11 3.474.325 4.798.154.949.95 1.66 1.91 1.708a97.58 97.58 0 0 0 5.416.139.988.988 0 0 1 0 1.975c-2.196 0-3.61-.047-5.513-.141A4.012 4.012 0 0 1 2.197 17.7c-.236-1.446-.351-3.151-.351-5.116 0-1.64.08-3.035.245-4.184A4.013 4.013 0 0 1 5.92 4.96c.761-.027 1.483-.05 2.164-.069Zm4.436 4.707h-1.32v4.63h2.222v.848h-2.618v1.078h2.431a5.01 5.01 0 0 1 3.575-3.115V9.598h-1.276a8.59 8.59 0 0 0 .748-1.42l-1.089-.384a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.289h-3.2v.979h2.067v1.43H7.483l-.308 3.454h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.004c.285.02.551.04.818.04 1.001-.066 1.562-.418 1.694-1.056.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858H15.8Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902H15.8v.902h-1.254Zm3.517 10.594a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.002-1.502a2.5 2.5 0 0 1-2.217-3.657l3.326 3.398a2.49 2.49 0 0 1-1.109.259Zm2.5-2.5c0 .42-.103.815-.286 1.162l-3.328-3.401a2.5 2.5 0 0 1 3.614 2.239Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>

              {/* 输入部分 */}
              <div className='flex flex-1 justify-between rounded-lg bg-gray-200 dark:bg-gray-950'>
                <div className='flex-1 p-1 sm:p-2'>
                  <input
                    className='bpx-player-dm-input w-full bg-gray-200 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none dark:bg-gray-950 dark:focus:ring-gray-950'
                    placeholder='发个友善的弹幕见证当下'
                  />
                </div>
                <div className='cursor-pointer rounded-r-lg bg-[#00A0D9] p-1 text-center text-white sm:p-2'>
                  <button className='cursor-pointer px-2 whitespace-nowrap sm:px-3'>发送</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionDivider>
    </>
  );
};

export default Comments;
