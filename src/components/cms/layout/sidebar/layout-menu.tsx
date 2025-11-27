'use client';

import Link from 'next/link';
import { layoutMenu } from './config';
import { usePathname } from 'next/navigation';

export const LayoutMenu = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      <nav className='mt-3 flex-1 space-y-5 overflow-y-auto px-3 pb-6'>
        {layoutMenu.map((item) => {
          if (item.type === 'item') {
            const active = isActive(item.path!);

            return (
              <Link
                key={item.path}
                href={item.path!}
                // 2. 默认链接样式和 Hover 效果（浅蓝色背景和蓝色文字）
                className={`relative mx-1 flex h-11 items-center gap-3 rounded-md px-4 text-sm tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-r from-[#409eff] to-[#66b1ff] font-medium text-white shadow-md shadow-blue-200'
                    : // 悬停时：使用极浅蓝背景和标准蓝色文字
                      'hover:bg-blue-50 hover:text-blue-600'
                } `}
              >
                {/* 激活状态的左侧蓝色装饰条 */}
                {active && <span className='absolute top-0 left-0 h-full w-[3px] rounded-r bg-white/50' />}
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          }

          return (
            <div key={item.name} className='space-y-2'>
              <div className='flex items-center px-4'>
                {/* 3. 分组标题颜色：使用中性灰色，避免在白色背景下使用太浅的颜色 */}
                <span className='flex-1 text-xs tracking-widest text-gray-500 uppercase'>{item.name}</span>
              </div>

              <div className='space-y-1'>
                {item.children!.map((child) => {
                  const active = isActive(child.path);

                  return (
                    <Link
                      key={child.path}
                      href={child.path}
                      // 4. 子链接样式和 Hover 效果（浅蓝色背景和蓝色文字）
                      className={`relative mx-1 flex h-10 items-center gap-3 rounded-md px-4 text-sm transition-all ${
                        active
                          ? 'bg-gradient-to-r from-[#409eff] to-[#66b1ff] font-medium text-white shadow-md shadow-blue-200'
                          : // 悬停时：使用极浅蓝背景和标准蓝色文字
                            'hover:bg-blue-50 hover:text-blue-600'
                      } `}
                    >
                      {/* 激活状态的左侧蓝色装饰条 */}
                      {active && <span className='absolute top-0 left-0 h-full w-[3px] rounded-r bg-white/50' />}
                      {child.icon}
                      <span>{child.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </>
  );
};
