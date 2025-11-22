import Footer from '../footer/index';
import { Header } from '../header/index';
import { Outlet, ScrollRestoration } from 'react-router';
import { LineLayout } from '@components/layout/lineLayout/index';

const Layout = () => {
  return (
    <>
      <LineLayout>
        <Header />

        <div className='flex flex-col'>
          <div className='flex-1'>
            <Outlet />
            <ScrollRestoration />
          </div>
        </div>

        <Footer />
      </LineLayout>
    </>
  );
};

export default Layout;
export { Header, Footer, LineLayout };
