import { Footer } from '../footer';
import { Header } from '../header';
import type { FC, ReactNode } from 'react';
import { LineLayout } from '@components/layout/lineLayout/index';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <LineLayout>
        <Header />
        <div className='flex flex-col'>
          <div className='flex-1 pt-13'>{children}</div>
          <Footer />
        </div>
      </LineLayout>
    </>
  );
};
