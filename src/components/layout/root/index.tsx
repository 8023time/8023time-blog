import { Footer } from '../footer/index';
import { Header } from '../header/Header';
import type { FC, ReactNode } from 'react';
import { LineLayout } from '@components/layout/lineLayout/index';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <LineLayout>
        <Header />
        <div className='flex flex-col'>
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </LineLayout>
    </>
  );
};
