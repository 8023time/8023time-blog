import Link from 'next/link';
import { SITE_DATA } from './config';
import { IsMobile, IsDesktop } from '@components/ui/viewport';

export const FooterCenter = () => {
  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <>
      <footer className='theme-transition text-sm/loose text-gray-950 dark:text-white'>
        <IsMobile>
          <div className='flex justify-center gap-4 p-4 *:first:border-l-0 *:last:border-r-0'>
            {/* 左侧为奇数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {SITE_DATA.filter((_, index) => index % 2 === 0).map((data) => {
                return (
                  <div key={data.title} className='py-8 pl-2 text-center dark:border-white/10'>
                    <h3 className='font-semibold text-gray-500'>{data.title}</h3>
                    <ul className='mt-4 grid gap-4 px-10'>
                      {data.items.map((item) => (
                        <li key={item.to} className='flex flex-col gap-3'>
                          <Link key={item.to} href={item.to}>
                            <span className='icon-common rounded-lg px-2 py-1 whitespace-nowrap'>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* 右侧为偶数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {SITE_DATA.filter((_, index) => index % 2 === 1).map((data) => {
                return (
                  <div key={data.title} className='py-8 pl-2 text-center dark:border-white/10'>
                    <h3 className='font-semibold text-gray-500'>{data.title}</h3>
                    <ul className='mt-4 grid gap-4 px-10'>
                      {data.items.map((item) => (
                        <li key={item.name} className='flex flex-col gap-3'>
                          <Link href={item.to}>
                            <span className='icon-common rounded-lg px-2 py-1 whitespace-nowrap'>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </IsMobile>

        <IsDesktop>
          <div className='mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 *:first:border-l-0 *:last:border-r-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8'>
            {SITE_DATA.map((item) => {
              const groups = chunk(item.items, 3);
              return (
                <div
                  key={item.title}
                  className='border-x border-b border-gray-950/5 py-8 pl-2 text-center not-md:border-0 md:border-b-0 dark:border-white/10'
                >
                  <h3 className='font-semibold text-gray-500'>{item.title}</h3>
                  <ul
                    className='mt-4 grid gap-10 px-10'
                    style={{
                      gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {groups.map((group) => (
                      <li key={group[0].to} className='flex flex-col gap-3'>
                        {group.map((item) => (
                          <Link key={item.to} href={item.to}>
                            <span className='icon-common rounded-lg px-2 py-1 whitespace-nowrap'>{item.name}</span>
                          </Link>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </IsDesktop>
      </footer>
    </>
  );
};
