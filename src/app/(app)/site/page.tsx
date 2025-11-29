'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteData } from './config';
import { SiteCard } from '@/components/ui/card';

export default function Site() {
  return (
    <>
      {/* 卡片网格 */}
      {siteData.map((group) => (
        <div key={group.title}>
          <div className='flex justify-center gap-10 py-10'>
            <Image src={group.logo} width={35} alt='logo' />
            <span className='text-2xl font-bold'>{group.title}</span>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            {group.list.map((site) => (
              <Link href={site.href} key={site.name} target='_blank'>
                <SiteCard {...site} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
