import { tv } from 'tailwind-variants';

export const tooltipStyle = tv({
  base: `
  z-50 overflow-hidden rounded-lg px-3 py-2 text-sm font-medium shadow-xl
  theme-transition bg-white dark:bg-gray-950
  text-gray-600 dark:text-gray-100
  border border-gray-200 dark:border-gray-700
  `,
});

export const tooltipArrowStyle = tv({
  base: `
  theme-transition fill-white dark:fill-gray-950
  `,
});
