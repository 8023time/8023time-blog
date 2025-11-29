import { cn } from '@/lib/class-name';
import { FooterTop } from './FooterTop';
import { FooterBottom } from './FooterBottom';
import { FooterCenter } from './FooterCenter';
import { SectionDivider } from '@components/layout/SectionDivider';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <>
      <div className={cn('mt-40 w-full text-sm/loose text-gray-950 dark:text-white', className)}>
        <SectionDivider>
          <FooterTop />
        </SectionDivider>

        <SectionDivider>
          <FooterCenter />
        </SectionDivider>

        <FooterBottom />
      </div>
    </>
  );
};
