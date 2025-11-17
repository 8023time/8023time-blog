import Header from './Header';
import Footer from './Footer';
import LineLayout from './LineLayout';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <LineLayout>
        <Header />

        <div className='flex flex-col'>
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>

        <Footer />
      </LineLayout>
    </>
  );
};

export default Layout;
export { Header, Footer, LineLayout };
