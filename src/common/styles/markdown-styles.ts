/**
 * @type {Record<string, Record<string, string | string[]>>}
 * Markdown 标签到 Tailwind CSS 类名的映射表（高对比度黑色文字版，无暗色模式）
 */
const tailwindMap = {
  // ===== 标题类 =====
  h1: {
    main: `
      text-3xl md:text-4xl font-sans font-bold tracking-tight
      text-black mt-12 mb-8 pb-3 border-b border-gray-300/50
      scroll-mt-24 selection:bg-gray-200/40
    `,
    dark: ``,
  },
  h2: {
    main: `
      text-2xl md:text-3xl font-sans font-semibold tracking-tight
      text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40
      scroll-mt-20 selection:bg-gray-200/40
    `,
    dark: ``,
  },
  h3: {
    main: `
      text-xl md:text-2xl font-sans font-medium tracking-tight
      text-gray-900 mt-8 mb-4 scroll-mt-20
    `,
    dark: ``,
  },
  h4: {
    main: `
      text-lg font-sans font-medium text-gray-900 mt-6 mb-3
      border-l-4 border-gray-400 pl-3
    `,
    dark: ``,
  },
  h5: {
    main: `
      text-base font-sans font-medium text-gray-900 mt-4 mb-2 uppercase tracking-wide
    `,
    dark: ``,
  },
  h6: {
    main: `
      text-sm font-sans font-semibold text-gray-800 mt-3 mb-2 uppercase tracking-wider
    `,
    dark: ``,
  },

  // ===== 基本文本 =====
  p: {
    main: `
      text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em]
      text-black mb-4 selection:bg-gray-200/40
    `,
    dark: ``,
  },
  strong: {
    main: `font-semibold text-black`,
    dark: ``,
  },
  em: {
    main: `italic text-gray-900`,
    dark: ``,
  },
  del: {
    main: `line-through text-gray-700`,
    dark: ``,
  },
  hr: {
    main: `my-10 border-t border-gray-300/50 rounded-full`,
    dark: ``,
  },
  sup: {
    main: `align-super text-sm text-gray-800`,
    dark: ``,
  },
  sub: {
    main: `align-sub text-sm text-gray-800`,
    dark: ``,
  },
  kbd: {
    main: `
      px-2 py-1 bg-gray-100 text-black rounded-md font-mono text-sm
      border border-gray-300 shadow-sm
    `,
    dark: ``,
  },

  // ===== 链接 =====
  a: {
    main: `
      text-blue-700 underline-offset-4 decoration-blue-400/50
      hover:underline hover:decoration-blue-600 hover:text-blue-900
      focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm
      transition-all duration-200 ease-out
    `,
    dark: ``,
  },

  // ===== 列表 =====
  ul: {
    main: `
      list-disc list-outside pl-6 my-5 space-y-2
      marker:text-gray-700
    `,
    dark: ``,
  },
  ol: {
    main: `
      list-none pl-8 my-5 space-y-3 [counter-reset:list-counter]
      [&_li]:[counter-increment:list-counter]
      [&_li]:before:content-[counter(list-counter)] [&_li]:before:absolute [&_li]:before:left-[-2rem]
      [&_li]:before:flex [&_li]:before:items-center [&_li]:before:justify-center [&_li]:before:w-6 [&_li]:before:h-6
      [&_li]:before:rounded-full [&_li]:before:bg-gray-200 [&_li]:before:text-black [&_li]:before:text-sm
      [&_li]:before:font-medium [&_li]:before:shadow-sm
    `,
    dark: ``,
  },
  li: {
    main: `
      text-base text-black leading-relaxed relative
    `,
    dark: ``,
  },

  // ===== 引用与代码块 =====
  blockquote: {
    main: `
      border-l-4 border-gray-400 bg-gray-50/60
      pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900
      ring-1 ring-gray-200/30
    `,
    dark: ``,
  },
  code: {
    main: `
      font-mono text-[0.95rem] leading-relaxed
      bg-gray-100 text-black
      px-[0.4em] py-[0.25em] rounded-md
      border border-gray-200 shadow-sm
      tracking-tight hover:bg-gray-200/60
      transition-all duration-200 ease-out
    `,
    dark: ``,
  },
  pre: {
    wrapper: `
      relative rounded-2xl ring-1 ring-gray-200 border border-gray-300
      overflow-hidden my-6 p-4 pt-8
      bg-[#262335]
    `,
    main: `
      bg-[#1e1e1e] text-gray-100 font-mono text-[15px] leading-[1.65]
      rounded-xl p-6 pt-8 overflow-x-auto border-t border-t-[#353942]
      [counter-reset:line]
    `,
    traffic: {
      bar: `absolute top-3 left-4 flex items-center gap-2`,
      light: `w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110`,
      red: `bg-[#FF5F56]`,
      yellow: `bg-[#FFBD2E]`,
      green: `bg-[#27C93F]`,
    },
  },

  // ===== 媒体元素 =====
  img: {
    main: `
      rounded-2xl shadow-md my-6 w-full object-contain
      ring-1 ring-gray-200 mx-auto block
      transition-transform duration-300 hover:scale-[1.01]
    `,
    dark: ``,
  },
  figure: {
    main: `my-6 flex flex-col items-center`,
    dark: ``,
  },
  figcaption: {
    main: `text-sm text-gray-700 mt-2 italic`,
    dark: ``,
  },

  // ===== 表格 =====
  table: {
    main: `
      w-full border-collapse my-6 text-left text-sm
      rounded-xl overflow-hidden ring-1 ring-gray-200
    `,
    dark: ``,
  },
  thead: {
    main: `bg-gray-100 text-black font-medium`,
    dark: ``,
  },
  tbody: {
    main: `divide-y divide-gray-200`,
    dark: ``,
  },
  tr: {
    main: `hover:bg-gray-50 transition-colors duration-150`,
    dark: ``,
  },
  th: {
    main: `px-4 py-2 font-medium text-black border-b border-gray-200`,
    dark: ``,
  },
  td: {
    main: `px-4 py-2 text-black border-b border-gray-200`,
    dark: ``,
  },

  // ===== 折叠块 =====
  details: {
    main: `
      bg-gray-50 rounded-xl p-4 my-5
      ring-1 ring-gray-200
      transition-all duration-300 open:shadow-sm
    `,
    dark: ``,
  },
  summary: {
    main: `
      font-medium cursor-pointer text-black hover:text-gray-900
    `,
    dark: ``,
  },
};

export { tailwindMap };
