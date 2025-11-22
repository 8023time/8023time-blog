import { tv } from 'tailwind-variants';

export const tooltipStyle = tv({
  slots: {
    wrapper: `
      relative inline-flex
    `,

    content: `
      absolute z-[1000] max-w-xs rounded-md px-3 py-2 text-sm shadow-lg
      transition-opacity transition-transform duration-150
      bg-gray-800 text-white
      dark:bg-white dark:text-gray-900
    `,

    arrow: `
      absolute h-0 w-0
      border-[6px] border-transparent
    `,
  },

  variants: {
    visible: {
      true: `
        opacity-100 scale-100
      `,
      false: `
        opacity-0 scale-95 pointer-events-none
      `,
    },

    placement: {
      top: '',
      bottom: '',
      left: '',
      right: '',
      topLeft: '',
      topRight: '',
      bottomLeft: '',
      bottomRight: '',
      leftTop: '',
      leftBottom: '',
      rightTop: '',
      rightBottom: '',
    },
  },

  compoundVariants: [
    //
    // ─── Top ─────────────────────────────────────────────────────────
    //
    {
      placement: 'top',
      slots: ['content'],
      class: 'bottom-full mb-[10px] left-1/2 -translate-x-1/2',
    },
    {
      placement: 'top',
      slots: ['arrow'],
      class: 'top-full left-1/2 -translate-x-1/2 border-t-gray-800 dark:border-t-white',
    },

    //
    // ─── Bottom ──────────────────────────────────────────────────────
    //
    {
      placement: 'bottom',
      slots: ['content'],
      class: 'top-full mt-[10px] left-1/2 -translate-x-1/2',
    },
    {
      placement: 'bottom',
      slots: ['arrow'],
      class: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-800 dark:border-b-white',
    },

    //
    // ─── Left ─────────────────────────────────────────────────────────
    //
    {
      placement: 'left',
      slots: ['content'],
      class: 'right-full mr-[10px] top-1/2 -translate-y-1/2',
    },
    {
      placement: 'left',
      slots: ['arrow'],
      class: 'left-full top-1/2 -translate-y-1/2 border-l-gray-800 dark:border-l-white',
    },

    //
    // ─── Right ───────────────────────────────────────────────────────
    //
    {
      placement: 'right',
      slots: ['content'],
      class: 'left-full ml-[10px] top-1/2 -translate-y-1/2',
    },
    {
      placement: 'right',
      slots: ['arrow'],
      class: 'right-full top-1/2 -translate-y-1/2 border-r-gray-800 dark:border-r-white',
    },

    //
    // ─── Corner Positions（保持定位对齐，但不做中心 translate）──────
    //
    // topLeft
    {
      placement: 'topLeft',
      slots: ['content'],
      class: 'bottom-full mb-[10px] left-0',
    },
    {
      placement: 'topLeft',
      slots: ['arrow'],
      class: 'top-full left-[8px] border-t-gray-800 dark:border-t-white',
    },

    // topRight
    {
      placement: 'topRight',
      slots: ['content'],
      class: 'bottom-full mb-[10px] right-0',
    },
    {
      placement: 'topRight',
      slots: ['arrow'],
      class: 'top-full right-[8px] border-t-gray-800 dark:border-t-white',
    },

    // bottomLeft
    {
      placement: 'bottomLeft',
      slots: ['content'],
      class: 'top-full mt-[10px] left-0',
    },
    {
      placement: 'bottomLeft',
      slots: ['arrow'],
      class: 'bottom-full left-[8px] border-b-gray-800 dark:border-b-white',
    },

    // bottomRight
    {
      placement: 'bottomRight',
      slots: ['content'],
      class: 'top-full mt-[10px] right-0',
    },
    {
      placement: 'bottomRight',
      slots: ['arrow'],
      class: 'bottom-full right-[8px] border-b-gray-800 dark:border-b-white',
    },

    // leftTop
    {
      placement: 'leftTop',
      slots: ['content'],
      class: 'right-full mr-[10px] top-0',
    },
    {
      placement: 'leftTop',
      slots: ['arrow'],
      class: 'left-full top-[8px] border-l-gray-800 dark:border-l-white',
    },

    // leftBottom
    {
      placement: 'leftBottom',
      slots: ['content'],
      class: 'right-full mr-[10px] bottom-0',
    },
    {
      placement: 'leftBottom',
      slots: ['arrow'],
      class: 'left-full bottom-[8px] border-l-gray-800 dark:border-l-white',
    },

    // rightTop
    {
      placement: 'rightTop',
      slots: ['content'],
      class: 'left-full ml-[10px] top-0',
    },
    {
      placement: 'rightTop',
      slots: ['arrow'],
      class: 'right-full top-[8px] border-r-gray-800 dark:border-r-white',
    },

    // rightBottom
    {
      placement: 'rightBottom',
      slots: ['content'],
      class: 'left-full ml-[10px] bottom-0',
    },
    {
      placement: 'rightBottom',
      slots: ['arrow'],
      class: 'right-full bottom-[8px] border-r-gray-800 dark:border-r-white',
    },
  ],

  defaultVariants: {
    visible: false,
    placement: 'top',
  },
});
