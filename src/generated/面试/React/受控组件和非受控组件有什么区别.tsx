
/**
 * @description: 这是一个自动生成的文件,请不要轻易修改它.
 * @source: D:/code/dome/JavaScript/react/react_dome/source/post/面试/React/受控组件和非受控组件有什么区别.md
 * @script: scripts/md-to-tsx
 */

import React from 'react';

export const metadata = {
  "title": "受控组件和非受控组件有什么区别",
  "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/面试/React/受控组件和非受控组件有什么区别.tsx",
  "relativePath": "面试/React/受控组件和非受控组件有什么区别.md",
  "category": [
    "面试",
    "React"
  ],
  "headings": [
    {
      "level": 2,
      "text": "受控组件和非受控组件有什么区别",
      "id": "受控组件和非受控组件有什么区别"
    },
    {
      "level": 3,
      "text": "1. 数据来源与控制权",
      "id": "1-数据来源与控制权"
    },
    {
      "level": 3,
      "text": "2. 数据流与渲染机制",
      "id": "2-数据流与渲染机制"
    },
    {
      "level": 3,
      "text": "3. 适用场景与业务权衡",
      "id": "3-适用场景与业务权衡"
    },
    {
      "level": 3,
      "text": "4. 成本与风险",
      "id": "4-成本与风险"
    }
  ],
  "frontMatter": {
    "title": "受控组件和非受控组件有什么区别",
    "date": "2025-11-13T23:00:00.000Z"
  }
};

const MarkdownComponent: React.FC = () => {
  // 渲染 Markdown 内容，使用 dangerouslySetInnerHTML
  return (
    <div
      className="markdown-content-wrapper prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: "<h2 id=\"受控组件和非受控组件有什么区别\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">受控组件和非受控组件有什么区别</h2>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">主要通过四维度来看：</p>\n</blockquote>\n<ol class=\"list-none pl-8 my-5 space-y-3 [counter-reset:list-counter] [&#x26;_li]:[counter-increment:list-counter] [&#x26;_li]:before:content-[counter(list-counter)] [&#x26;_li]:before:absolute [&#x26;_li]:before:left-[-2rem] [&#x26;_li]:before:flex [&#x26;_li]:before:items-center [&#x26;_li]:before:justify-center [&#x26;_li]:before:w-6 [&#x26;_li]:before:h-6 [&#x26;_li]:before:rounded-full [&#x26;_li]:before:bg-gray-200 [&#x26;_li]:before:text-black [&#x26;_li]:before:text-sm [&#x26;_li]:before:font-medium [&#x26;_li]:before:shadow-sm\">\n<li class=\"text-base text-black leading-relaxed relative\">数据来源与控制权 【技术层】</li>\n<li class=\"text-base text-black leading-relaxed relative\">数据流与渲染机制 【技术层】</li>\n<li class=\"text-base text-black leading-relaxed relative\">适用场景与业务权衡 【工程层】</li>\n<li class=\"text-base text-black leading-relaxed relative\">成本与风险 【工程层】</li>\n</ol>\n<h3 id=\"1-数据来源与控制权\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">1. 数据来源与控制权</h3>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">受控组件强调由外部统一管理数据。输入框的 value 并不是组件内部存储，而是完全依赖外部的 state 或 props。组件自身只是“渲染和回调的执行层”，不持有实际数据。这样能够确保数据在整个应用中始终保持唯一来源，有利于保证一致性。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">非受控组件的数据来源则是 DOM 或组件内部状态。React 不会主动接管这部分数据，组件依赖 <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">defaultValue</code> 进行初始化，之后的修改留在 DOM 层面。外部只有在需要时才能通过 ref 主动读取数据。这意味着组件的真实状态并不会随着 React 更新而同步变化。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">这种差异决定了<strong class=\"font-semibold text-black\">谁对数据拥有最终解释权</strong>，进而影响应用的可控性和可维护性。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h3 id=\"2-数据流与渲染机制\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">2. 数据流与渲染机制</h3>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">受控组件运行在“完全受 React 管控的单向数据流”模型下。用户输入不会直接改变 DOM，而是触发 onChange → setState 这样的流程。React 接管更新逻辑，触发一次新的渲染，使 value 与 state 保持一致。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">非受控组件中，输入的变更直接发生在 DOM 内部，不会主动触发 React 的状态流动，也不会立即引发组件渲染。React 只在初次渲染中设置默认值，之后就交由浏览器处理。组件只在外部访问 ref 时暴露最终状态。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">两者的差异意味着：前者的渲染逻辑可预测、可跟踪；后者更独立，更新成本低，但数据透明度弱。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h3 id=\"3-适用场景与业务权衡\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">3. 适用场景与业务权衡</h3>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">受控组件适合需要强一致性的业务场景，比如复杂表单、多字段联动、实时校验、动态禁用/校验逻辑、数据统计等。其优势在于 React 层能够精确掌握每一次数据变更，使业务逻辑的可控性更强。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">非受控组件适用于简单输入场景，如单字段、小规模的用户输入，不需要实时监控输入值、不涉及联动的场景。它能减少状态同步成本，缩短编码路径，提高开发效率。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">选择哪种模式通常取决于业务复杂度与可维护性需求，实际开发中也常见两种方式混合使用。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h3 id=\"4-成本与风险\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">4. 成本与风险</h3>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">受控组件的优势在于可观测性、可测试性与扩展性。由于所有输入都进入 React 的状态体系，调试、日志记录、回放、埋点分析都更容易。但它也带来额外渲染开销，并需要编写更多状态管理代码，在性能敏感场景下需要谨慎权衡。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">非受控组件开发门槛低，写法更接近传统表单操作，运行时开销也更小。但其风险在于状态不透明、难以追溯、更难维护复杂联动。同时，由于值存放在 DOM 层，不利于统一管理和自动化测试。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">最终，受控组件更强调体系化治理，非受控组件更偏向灵活与轻量。</p>" }}
    />
  );
};

export default MarkdownComponent;
