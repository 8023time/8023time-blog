import { tv } from 'tailwind-variants';

//=============== floatButton ===============//
export const floatButtonStyle = tv({
  base: `
    inline-flex items-center justify-center
    transition-colors select-none
    focus-visible:outline-none
    disabled:cursor-not-allowed
  `,
  variants: {
    type: {
      default:
        'bg-white text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700',
      primary: 'bg-blue-600 text-white shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
      dashed:
        'border border-dashed border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700',
      text: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
      round: 'rounded-xl',
    },
    size: {
      small: 'w-8 h-8 text-sm',
      medium: 'w-10 h-10 text-base',
      large: 'w-12 h-12 text-lg',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
  defaultVariants: {
    type: 'default',
    shape: 'circle',
    size: 'medium',
  },
});

//=============== FloatButtonContent ===============//
export const FloatButtonContentStyle = tv({
  slots: {
    container: `
      flex flex-col items-center justify-center
      pointer-events-none
    `,
    icon: `
      flex items-center justify-center
      text-current
      dark:text-gray-100
    `,
    description: `
      text-[10px] leading-none mt-0.5
      text-current
      dark:text-gray-300
    `,
  },
});
