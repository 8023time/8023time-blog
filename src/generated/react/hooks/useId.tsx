
/**
 * @description: 这是一个自动生成的文件,请不要轻易修改它.
 * @source: D:/code/dome/JavaScript/react/react_dome/source/post/react/hooks/useId.md
 * @script: scripts/md-to-tsx
 */

import React from 'react';

export const metadata = {
  "title": "useRef",
  "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useId.tsx",
  "relativePath": "react/hooks/useId.md",
  "category": [
    "react",
    "hooks"
  ],
  "headings": [
    {
      "level": 1,
      "text": "useId",
      "id": "useid"
    },
    {
      "level": 1,
      "text": "使用场景",
      "id": "使用场景"
    },
    {
      "level": 1,
      "text": "语法",
      "id": "语法"
    },
    {
      "level": 2,
      "text": "参数",
      "id": "参数"
    },
    {
      "level": 2,
      "text": "返回值",
      "id": "返回值"
    },
    {
      "level": 1,
      "text": "示例",
      "id": "示例"
    }
  ],
  "frontMatter": {
    "title": "useRef",
    "date": "2020-05-15",
    "draft": false,
    "path": "/blog/react-hook-useRef"
  }
};

const MarkdownComponent: React.FC = () => {
  // 渲染 Markdown 内容，使用 dangerouslySetInnerHTML
  return (
    <div
      className="markdown-content-wrapper prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: "<h1 id=\"useid\" class=\"text-3xl md:text-4xl font-sans font-bold tracking-tight text-black mt-12 mb-8 pb-3 border-b border-gray-300/50 scroll-mt-24 selection:bg-gray-200/40\">useId</h1>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\"><code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">useId</code> 是 React 18 新增的 Hook，用于生成<strong class=\"font-semibold text-black\">稳定且唯一的 ID</strong>，主要用于无障碍（Accessibility, a11y）属性或组件之间的关联。<br>\n它在服务端渲染（SSR）和客户端渲染（CSR）中保持一致，避免 ID 不匹配问题。</p>\n</blockquote>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h1 id=\"使用场景\" class=\"text-3xl md:text-4xl font-sans font-bold tracking-tight text-black mt-12 mb-8 pb-3 border-b border-gray-300/50 scroll-mt-24 selection:bg-gray-200/40\">使用场景</h1>\n<ul class=\"list-disc list-outside pl-6 my-5 space-y-2 marker:text-gray-700\">\n<li class=\"text-base text-black leading-relaxed relative\">为组件生成唯一的 ID，以便在组件中使用</li>\n<li class=\"text-base text-black leading-relaxed relative\">解决 SSR 场景下的 ID 不一致的问题</li>\n<li class=\"text-base text-black leading-relaxed relative\">无障碍交互唯一ID</li>\n</ul>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h1 id=\"语法\" class=\"text-3xl md:text-4xl font-sans font-bold tracking-tight text-black mt-12 mb-8 pb-3 border-b border-gray-300/50 scroll-mt-24 selection:bg-gray-200/40\">语法</h1>\n<div class=\"relative rounded-2xl ring-1 ring-gray-200 border border-gray-300 overflow-hidden my-6 p-4 pt-8 bg-[#262335]\"><div class=\"absolute top-3 left-4 flex items-center gap-2\"><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FF5F56]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FFBD2E]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#27C93F]\"></button></div><pre class=\"shiki shiki-themes synthwave-84 synthwave-84\" style=\"background-color:#262335;--shiki-dark-bg:#262335;color:#bbbbbb;--shiki-dark:#bbbbbb\" tabindex=\"0\" class=\"bg-[#1e1e1e] text-gray-100 font-mono text-[15px] leading-[1.65] rounded-xl p-6 pt-8 overflow-x-auto border-t border-t-[#353942] [counter-reset:line]\"><code><span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">import</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\"> { </span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">useId</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\"> } </span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">from</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\"> 'react'</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">const</span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\"> id</span><span style=\"color:#FFFFFFEE;--shiki-dark:#FFFFFFEE\"> =</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\"> useId</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">();</span></span></code></pre></div>\n<h2 id=\"参数\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">参数</h2>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">无</p>\n<h2 id=\"返回值\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">返回值</h2>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">返回一个稳定的、唯一的字符串 ID。\r\n比如： <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">:r0:</code>  <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">:r1:</code>\r\n这些 ID 会在每个组件实例中保持唯一性，并在服务端和客户端渲染之间保持一致。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h1 id=\"示例\" class=\"text-3xl md:text-4xl font-sans font-bold tracking-tight text-black mt-12 mb-8 pb-3 border-b border-gray-300/50 scroll-mt-24 selection:bg-gray-200/40\">示例</h1>\n<div class=\"relative rounded-2xl ring-1 ring-gray-200 border border-gray-300 overflow-hidden my-6 p-4 pt-8 bg-[#262335]\"><div class=\"absolute top-3 left-4 flex items-center gap-2\"><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FF5F56]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FFBD2E]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#27C93F]\"></button></div><pre class=\"shiki shiki-themes synthwave-84 synthwave-84\" style=\"background-color:#262335;--shiki-dark-bg:#262335;color:#bbbbbb;--shiki-dark:#bbbbbb\" tabindex=\"0\" class=\"bg-[#1e1e1e] text-gray-100 font-mono text-[15px] leading-[1.65] rounded-xl p-6 pt-8 overflow-x-auto border-t border-t-[#353942] [counter-reset:line]\"><code><span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">import</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\"> { </span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">useId</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\"> } </span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">from</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\"> 'react'</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">export</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\"> default</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\"> function</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\"> NameField</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">  const</span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\"> id</span><span style=\"color:#FFFFFFEE;--shiki-dark:#FFFFFFEE\"> =</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\"> useId</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">();</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">  return</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\"> (</span></span>\n<span class=\"line\"><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">    &#x3C;</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">div</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">></span></span>\n<span class=\"line\"><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">      &#x3C;</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">label</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\"> htmlFor</span><span style=\"color:#FFFFFFEE;--shiki-dark:#FFFFFFEE\">=</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">{</span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">id</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">}</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">></span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">姓名：</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">&#x3C;/</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">label</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">></span></span>\n<span class=\"line\"><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">      &#x3C;</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">input</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\"> id</span><span style=\"color:#FFFFFFEE;--shiki-dark:#FFFFFFEE\">=</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">{</span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">id</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">}</span><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\"> type</span><span style=\"color:#FFFFFFEE;--shiki-dark:#FFFFFFEE\">=</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\">\"text\"</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\"> /></span></span>\n<span class=\"line\"><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">    &#x3C;/</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">div</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">></span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">  );</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">}</span></span></code></pre></div>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\"><code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">useId</code> 可以保证每个表单组件都有自己独立的 ID，避免多实例冲突。</p>" }}
    />
  );
};

export default MarkdownComponent;
