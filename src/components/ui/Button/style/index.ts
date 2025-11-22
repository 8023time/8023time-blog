import { tv } from 'tailwind-variants';

export const buttonStyle = tv({
  base:
    'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 ' +
    'focus:ring-offset-2 whitespace-nowrap',

  variants: {
    variant: {
      solid: '',
      outlined: '',
      filled: '',
      text: '',
      link: '',
    },

    color: {
      primary: '',
      danger: '',
      warning: '',
      info: '',
    },

    size: {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    },
  },

  compoundVariants: [
    // solid
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
    },

    // outlined
    {
      variant: 'outlined',
      color: 'primary',
      class: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    },
    {
      variant: 'outlined',
      color: 'danger',
      class: 'border border-red-600 text-red-600 hover:bg-red-50',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50',
    },
    {
      variant: 'outlined',
      color: 'info',
      class: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50',
    },

    // filled
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    },
    {
      variant: 'filled',
      color: 'danger',
      class: 'bg-red-100 text-red-700 hover:bg-red-200',
    },
    {
      variant: 'filled',
      color: 'warning',
      class: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    },
    {
      variant: 'filled',
      color: 'info',
      class: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
    },

    // text
    {
      variant: 'text',
      color: 'primary',
      class: 'text-blue-600 hover:bg-blue-50',
    },
    {
      variant: 'text',
      color: 'danger',
      class: 'text-red-600 hover:bg-red-50',
    },
    {
      variant: 'text',
      color: 'warning',
      class: 'text-yellow-600 hover:bg-yellow-50',
    },
    {
      variant: 'text',
      color: 'info',
      class: 'text-cyan-600 hover:bg-cyan-50',
    },

    // link
    {
      variant: 'link',
      color: 'primary',
      class: 'text-blue-600 hover:underline',
    },
    {
      variant: 'link',
      color: 'danger',
      class: 'text-red-600 hover:underline',
    },
    {
      variant: 'link',
      color: 'warning',
      class: 'text-yellow-600 hover:underline',
    },
    {
      variant: 'link',
      color: 'info',
      class: 'text-cyan-600 hover:underline',
    },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'info',
    size: 'medium',
  },
});
