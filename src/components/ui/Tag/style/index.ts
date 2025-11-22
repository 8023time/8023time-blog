import { tv } from 'tailwind-variants';

export const TagStyle = tv({
  base: `
    inline-flex items-center gap-1.5 rounded-full border font-medium
    select-none transition-all
  `,

  variants: {
    color: {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    },

    size: {
      xs: 'px-2 py-0.5 text-xs',
      sm: 'px-2.5 py-1 text-sm',
      md: 'px-3 py-1.5 text-base',
    },

    clickable: {
      true: 'cursor-pointer hover:opacity-80',
      false: '',
    },

    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },

  compoundVariants: [
    {
      clickable: true,
      disabled: true,
      class: 'cursor-not-allowed opacity-50 hover:opacity-100',
    },
  ],

  defaultVariants: {
    size: 'sm',
    color: 'gray',
    clickable: false,
    disabled: false,
  },
});
