import { cn } from '@utils/className';
import { NavLink } from 'react-router';
import { footerData } from '@data/footer.data';
import { ToggleTheme, SectionDivider } from '@/components/index';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <div
      className={cn('mt-40 w-full bg-gray-50 text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white', className)}
    >
      {/*  contact info （联系方式） */}
      <SectionDivider>
        <div className='flex w-full flex-col items-center justify-center'>
          {footerData.top.avatar && <footerData.top.avatar size={42} />}
          <ul className='flex gap-4'>
            {footerData.top.socialIcons.map((item) => {
              return (
                <li>
                  <NavLink to={item.to} target='_blank'>
                    <button title={item.name}>
                      <item.icon size={26} />
                    </button>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div>{footerData.top.stats}</div>
        </div>
      </SectionDivider>

      {/*  footer (页脚导航) */}
      <SectionDivider>
        <footer className='bg-gray-50 text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white'>
          {/* 移动端导航列 */}
          <div className='flex justify-center gap-4 p-4 *:first:border-l-0 *:last:border-r-0 md:hidden'>
            {/* 左侧为奇数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {footerData.categories
                .filter((_, index) => index % 2 === 0)
                .map((data) => {
                  return (
                    <div className='border-x border-b border-gray-950/5 py-8 pl-2 text-center not-md:border-0 md:border-b-0 dark:border-white/10'>
                      <h3 className='font-semibold text-gray-500'>{data.title}</h3>
                      <ul className='mt-4 grid gap-4 px-10'>
                        {data.items.map((item, index) => (
                          <li key={index} className='flex flex-col gap-3'>
                            <NavLink key={item.to} to={item.to}>
                              <span className='rounded-lg px-2 py-1 whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-800'>
                                {item.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </div>

            {/* 右侧为偶数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {footerData.categories
                .filter((_, index) => index % 2 === 1)
                .map((data) => {
                  return (
                    <div className='border-x border-b border-gray-950/5 py-8 pl-2 text-center not-md:border-0 md:border-b-0 dark:border-white/10'>
                      <h3 className='font-semibold text-gray-500'>{data.title}</h3>
                      <ul className='mt-4 grid gap-4 px-10'>
                        {data.items.map((item, index) => (
                          <li key={index} className='flex flex-col gap-3'>
                            <NavLink key={item.to} to={item.to}>
                              <span className='rounded-lg px-2 py-1 whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-800'>
                                {item.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 桌面端导航列 */}
          <div className='mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 *:first:border-l-0 *:last:border-r-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8'>
            {footerData.categories.map((item) => {
              const groups = chunk(item.items, 3);
              return (
                <div className='border-x border-b border-gray-950/5 py-8 pl-2 text-center not-md:border-0 md:border-b-0 dark:border-white/10'>
                  <h3 className='font-semibold text-gray-500'>{item.title}</h3>
                  <ul
                    className='mt-4 grid gap-10 px-10'
                    style={{
                      gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {groups.map((group, groupIndex) => (
                      <li key={groupIndex} className='flex flex-col gap-3'>
                        {group.map((item) => (
                          <NavLink key={item.to} to={item.to}>
                            <span className='rounded-lg px-2 py-1 whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-800'>
                              {item.name}
                            </span>
                          </NavLink>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </footer>
      </SectionDivider>

      {/* 主题切换 + 备案信息 */}
      <div className='px-5 pt-10 pb-15'>
        <div className='mx-auto flex w-full items-center justify-between gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-6 lg:px-8'>
          {/* 备案信息 */}
          <div className='grid place-items-center text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400'>
            {footerData.copyright}
          </div>

          {/* 主题切换 */}
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Footer;
