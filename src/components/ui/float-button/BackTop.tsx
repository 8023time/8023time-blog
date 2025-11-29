import { Up } from '@components/icons/up';
import { scrollTo } from '@/lib/scroll-to';
import { FloatButton } from './FloatButton';
import { getScroll } from '@/lib/get-scroll';
import type { BackTopProps } from './interface';
import type { FloatButtonElement } from './interface';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, type FC, useCallback } from 'react';

export const BackTop: FC<BackTopProps> = (props) => {
  const { icon, duration, visibilityHeight, target, ...rest } = props;
  const [visible, setVisible] = useState<boolean>(visibilityHeight === 0);

  //=============== container(容器) ===============//
  const getDefaultTarget = (): HTMLElement | Document | Window => {
    return window;
  };

  const handleScroll = useCallback(
    (e: Event) => {
      const scrollTop = getScroll(e.target as HTMLElement | Document | Window);
      setVisible(scrollTop > (visibilityHeight || 0));
    },
    [visibilityHeight],
  );

  const checkScrollPosition = useCallback(
    (container: HTMLElement | Document | Window) => {
      const scrollTop = getScroll(container);
      setVisible(scrollTop > (visibilityHeight || 0));
    },
    [visibilityHeight],
  );

  useEffect(() => {
    const getTarget = target || getDefaultTarget;
    const container = getTarget();

    const rafId = requestAnimationFrame(() => checkScrollPosition(container));
    container?.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [target, visibilityHeight, checkScrollPosition, handleScroll]);

  //=============== return to top(返回顶部) ===============//
  const scrollToTop: React.MouseEventHandler<FloatButtonElement> = () => {
    scrollTo(0, { getContainer: target || getDefaultTarget, duration });
  };

  //=============== 图标 ===============//
  const mergedIcon = icon ?? <Up />;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '40px',
              height: '40px',
              zIndex: 999,
            }}
            className='fixed right-5 bottom-5'
          >
            <FloatButton icon={mergedIcon} {...rest} onClick={scrollToTop} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
