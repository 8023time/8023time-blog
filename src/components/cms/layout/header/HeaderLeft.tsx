import { BreadCrumb } from './HeaderLeftCrumb';
import { HeaderLeftMenu } from './HeaderLeftMenu';
import { IsMobile } from '@components/ui/viewport';

export const HeaderLeft = () => {
  return (
    <>
      <div className='flex items-center justify-between gap-4'>
        <IsMobile>
          <HeaderLeftMenu />
        </IsMobile>

        <BreadCrumb />
      </div>
    </>
  );
};
