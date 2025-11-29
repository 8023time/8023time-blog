import type { FC } from 'react';
import { cn } from '@lib/class-name';
import type { TooltipProps } from './interface';
import { motion, AnimatePresence } from 'motion/react';
import { tooltipStyle, tooltipArrowStyle } from './style';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const Tooltip: FC<TooltipProps> = (props) => {
  const { children, content, placement = 'bottom', enterDelay = 300, arrow = true, className, ...rest } = props;

  if (!content) return <>{children}</>;

  return (
    <TooltipPrimitive.Provider delayDuration={enterDelay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span className='inline-block'>{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={arrow ? 0 : 8}
            side={placement}
            {...rest}
            className={cn(tooltipStyle(), className)}
          >
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {content}
                {arrow && <TooltipPrimitive.Arrow className={tooltipArrowStyle()} width={11} height={6} />}
              </motion.div>
            </AnimatePresence>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
