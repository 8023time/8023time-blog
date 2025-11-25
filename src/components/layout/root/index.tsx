import { Footer } from '../footer/index';
import { Header } from '../header/index';
import { useMatches } from 'react-router';
import { Outlet, ScrollRestoration } from 'react-router';
import { LineLayout } from '@components/layout/lineLayout/index';

export const Layout = () => {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1] as { handle: { hideFooter: boolean } };
  const hideFooter = currentRoute?.handle?.hideFooter ?? false;

  return (
    <>
      <LineLayout>
        <Header />

        <div className='flex flex-col'>
          <div className='flex-1'>
            <Outlet />
            <ScrollRestoration />
          </div>
          {!hideFooter && <Footer />}
        </div>
      </LineLayout>
    </>
  );
};
