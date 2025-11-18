import { Up } from '@components/index';
import scrollTo from '@utils/scrollTo';
import FloatButton from './FloatButton';
import getScroll from '@utils/getScroll';
import type { BackTopProps } from './interface';
import React, { useState, useEffect } from 'react';
import type { FloatButtonElement } from './interface';
import { motion, AnimatePresence } from 'motion/react';

const BackTop: React.FC<BackTopProps> = (props) => {
  const { icon, duration, visibilityHeight, target, ...rest } = props;
  const [visible, setVisible] = useState<boolean>(visibilityHeight === 0);

  //=============== container(容器) ===============//
  const getDefaultTarget = (): HTMLElement | Document | Window => {
    return window;
  };

  const handleScroll = (e: Event) => {
    const scrollTop = getScroll(e.target as HTMLElement | Document | Window);
    setVisible(scrollTop > (visibilityHeight || 0));
  };

  const checkScrollPosition = (container: HTMLElement | Document | Window) => {
    const scrollTop = getScroll(container);
    setVisible(scrollTop > (visibilityHeight || 0));
  };

  useEffect(() => {
    const getTarget = target || getDefaultTarget;
    const container = getTarget();
    checkScrollPosition(container);
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [target]);

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
            className='fixed right-5 bottom-20'
          >
            <FloatButton icon={mergedIcon} {...rest} onClick={scrollToTop} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackTop;
