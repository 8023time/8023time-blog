
/**
 * @description: 这是一个自动生成的文件,请不要轻易修改它.
 * @source: D:/code/dome/JavaScript/react/react_dome/source/post/模板/文件/test.md
 * @script: scripts/md-to-tsx
 */

import React from 'react';

export const metadata = {
  "title": "Markdown 样式映射全面测试",
  "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/模板/文件/test.tsx",
  "relativePath": "模板/文件/test.md",
  "category": [
    "模板",
    "文件"
  ],
  "headings": [
    {
      "level": 1,
      "text": "🧩 H1 标题 - 一级标题测试",
      "id": "h1-标题-一级标题测试"
    },
    {
      "level": 2,
      "text": "⚙️ H2 标题 - 二级标题",
      "id": "h2-标题-二级标题"
    },
    {
      "level": 3,
      "text": "🪶 H3 标题",
      "id": "h3-标题"
    },
    {
      "level": 2,
      "text": "📝 段落与文本样式",
      "id": "段落与文本样式"
    },
    {
      "level": 2,
      "text": "🔗 链接测试",
      "id": "链接测试"
    },
    {
      "level": 2,
      "text": "📋 列表测试",
      "id": "列表测试"
    },
    {
      "level": 3,
      "text": "无序列表",
      "id": "无序列表"
    },
    {
      "level": 3,
      "text": "有序列表",
      "id": "有序列表"
    },
    {
      "level": 3,
      "text": "任务列表",
      "id": "任务列表"
    },
    {
      "level": 2,
      "text": "💬 引用测试",
      "id": "引用测试"
    },
    {
      "level": 2,
      "text": "🧮 表格测试",
      "id": "表格测试"
    },
    {
      "level": 2,
      "text": "💻 代码块测试",
      "id": "代码块测试"
    },
    {
      "level": 3,
      "text": "JavaScript",
      "id": "javascript"
    },
    {
      "level": 2,
      "text": "Footnotes",
      "id": "footnotes"
    }
  ],
  "frontMatter": {
    "title": "Markdown 样式映射全面测试",
    "author": "8023time",
    "date": "2025-11-04T00:00:00.000Z",
    "description": "测试 rehypeTailwindInjector + Tailwind 样式映射在所有 Markdown 元素下的表现。"
  }
};

const MarkdownComponent: React.FC = () => {
  // 渲染 Markdown 内容，使用 dangerouslySetInnerHTML
  return (
    <div
      className="markdown-content-wrapper prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: "<h1 id=\"h1-标题-一级标题测试\" class=\"text-3xl md:text-4xl font-sans font-bold tracking-tight text-black mt-12 mb-8 pb-3 border-b border-gray-300/50 scroll-mt-24 selection:bg-gray-200/40\">🧩 H1 标题 - 一级标题测试</h1>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">用于验证 <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">h1</code> 样式（粗体、大字号、底部边框）。</p>\n<h2 id=\"h2-标题-二级标题\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">⚙️ H2 标题 - 二级标题</h2>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">验证次级标题的边框与间距。<br>\n支持内联元素：<strong class=\"font-semibold text-black\">粗体</strong>、<em class=\"italic text-gray-900\">斜体</em>、<del class=\"line-through text-gray-700\">删除线</del>、<code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">行内代码</code>、下划线。</p>\n<h3 id=\"h3-标题\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">🪶 H3 标题</h3>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">用于检测多级结构层次的可读性与滚动锚点样式。</p>\n<h4 class=\"text-lg font-sans font-medium text-gray-900 mt-6 mb-3 border-l-4 border-gray-400 pl-3\">🌈 H4 标题</h4>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">验证左边框、层次间距、灰度视觉。</p>\n<h5 class=\"text-base font-sans font-medium text-gray-900 mt-4 mb-2 uppercase tracking-wide\">🧱 H5 标题</h5>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">测试小型标题（全大写、间距紧凑）。</p>\n<h6 class=\"text-sm font-sans font-semibold text-gray-800 mt-3 mb-2 uppercase tracking-wider\">🧩 H6 标题</h6>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">最小层级标题，确保缩放与权重正确。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"段落与文本样式\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">📝 段落与文本样式</h2>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">这是一个普通段落，用于测试段落行高、字间距、选择状态颜色、文字阴影与留白。\n第二行接续内容，包含 <strong class=\"font-semibold text-black\">粗体文字</strong>、<em class=\"italic text-gray-900\">斜体文字</em>、<del class=\"line-through text-gray-700\">删除文字</del>、<code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">inline code</code> 以及脚注测试<sup class=\"align-super text-sm text-gray-800\"><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref aria-describedby=\"footnote-label\" class=\"text-blue-700 underline-offset-4 decoration-blue-400/50 hover:underline hover:decoration-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm transition-all duration-200 ease-out\">1</a></sup>。</p>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\"><strong class=\"font-semibold text-black\">加粗句子</strong>应明显高亮；<em class=\"italic text-gray-900\">斜体部分</em>应具备轻微倾斜；<br>\n<code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">inline code</code> 应采用等宽字体、浅色背景。</p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"链接测试\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">🔗 链接测试</h2>\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">外部链接：<a href=\"https://github.com\" class=\"text-blue-700 underline-offset-4 decoration-blue-400/50 hover:underline hover:decoration-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm transition-all duration-200 ease-out\">GitHub</a><br>\n内部锚点：<a href=\"#-%E4%BB%A3%E7%A0%81%E5%9D%97%E6%B5%8B%E8%AF%95\" class=\"text-blue-700 underline-offset-4 decoration-blue-400/50 hover:underline hover:decoration-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm transition-all duration-200 ease-out\">跳转至代码块</a><br>\n自动链接：<a href=\"https://openai.com\" class=\"text-blue-700 underline-offset-4 decoration-blue-400/50 hover:underline hover:decoration-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm transition-all duration-200 ease-out\">https://openai.com</a></p>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"列表测试\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">📋 列表测试</h2>\n<h3 id=\"无序列表\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">无序列表</h3>\n<ul class=\"list-disc list-outside pl-6 my-5 space-y-2 marker:text-gray-700\">\n<li class=\"text-base text-black leading-relaxed relative\">第一项（包含 <strong class=\"font-semibold text-black\">粗体</strong> 与 <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">代码</code>）\n<ul class=\"list-disc list-outside pl-6 my-5 space-y-2 marker:text-gray-700\">\n<li class=\"text-base text-black leading-relaxed relative\">子项 1.1\n<ul class=\"list-disc list-outside pl-6 my-5 space-y-2 marker:text-gray-700\">\n<li class=\"text-base text-black leading-relaxed relative\">嵌套层 1.1.1</li>\n</ul>\n</li>\n</ul>\n</li>\n<li class=\"text-base text-black leading-relaxed relative\">第二项</li>\n<li class=\"text-base text-black leading-relaxed relative\">第三项</li>\n</ul>\n<h3 id=\"有序列表\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">有序列表</h3>\n<ol class=\"list-none pl-8 my-5 space-y-3 [counter-reset:list-counter] [&#x26;_li]:[counter-increment:list-counter] [&#x26;_li]:before:content-[counter(list-counter)] [&#x26;_li]:before:absolute [&#x26;_li]:before:left-[-2rem] [&#x26;_li]:before:flex [&#x26;_li]:before:items-center [&#x26;_li]:before:justify-center [&#x26;_li]:before:w-6 [&#x26;_li]:before:h-6 [&#x26;_li]:before:rounded-full [&#x26;_li]:before:bg-gray-200 [&#x26;_li]:before:text-black [&#x26;_li]:before:text-sm [&#x26;_li]:before:font-medium [&#x26;_li]:before:shadow-sm\">\n<li class=\"text-base text-black leading-relaxed relative\">步骤一</li>\n<li class=\"text-base text-black leading-relaxed relative\">步骤二\n<ol class=\"list-none pl-8 my-5 space-y-3 [counter-reset:list-counter] [&#x26;_li]:[counter-increment:list-counter] [&#x26;_li]:before:content-[counter(list-counter)] [&#x26;_li]:before:absolute [&#x26;_li]:before:left-[-2rem] [&#x26;_li]:before:flex [&#x26;_li]:before:items-center [&#x26;_li]:before:justify-center [&#x26;_li]:before:w-6 [&#x26;_li]:before:h-6 [&#x26;_li]:before:rounded-full [&#x26;_li]:before:bg-gray-200 [&#x26;_li]:before:text-black [&#x26;_li]:before:text-sm [&#x26;_li]:before:font-medium [&#x26;_li]:before:shadow-sm\">\n<li class=\"text-base text-black leading-relaxed relative\">子步骤 2.1</li>\n<li class=\"text-base text-black leading-relaxed relative\">子步骤 2.2</li>\n</ol>\n</li>\n<li class=\"text-base text-black leading-relaxed relative\">步骤三</li>\n</ol>\n<h3 id=\"任务列表\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">任务列表</h3>\n<ul class=\"list-disc list-outside pl-6 my-5 space-y-2 marker:text-gray-700 contains-task-list\">\n<li class=\"text-base text-black leading-relaxed relative task-list-item\"><input type=\"checkbox\" checked disabled> 已完成任务</li>\n<li class=\"text-base text-black leading-relaxed relative task-list-item\"><input type=\"checkbox\" disabled> 待办任务</li>\n<li class=\"text-base text-black leading-relaxed relative task-list-item\"><input type=\"checkbox\" checked disabled> ✅ 验证状态图标</li>\n</ul>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"引用测试\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">💬 引用测试</h2>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">一级引用：测试边框与灰色背景。\n包含 <strong class=\"font-semibold text-black\">粗体文字</strong> 和 <code class=\"font-mono text-[0.95rem] leading-relaxed bg-gray-100 text-black px-[0.4em] py-[0.25em] rounded-md border border-gray-200 shadow-sm tracking-tight hover:bg-gray-200/60 transition-all duration-200 ease-out\">代码块</code>。</p>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">二级引用：测试多层嵌套。</p>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">第三级引用，用于检查阴影层次。</p>\n</blockquote>\n</blockquote>\n</blockquote>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"表格测试\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">🧮 表格测试</h2>\n<table class=\"w-full border-collapse my-6 text-left text-sm rounded-xl overflow-hidden ring-1 ring-gray-200\">\n<thead class=\"bg-gray-100 text-black font-medium\">\n<tr class=\"hover:bg-gray-50 transition-colors duration-150\">\n<th class=\"px-4 py-2 font-medium text-black border-b border-gray-200\">姓名</th>\n<th class=\"px-4 py-2 font-medium text-black border-b border-gray-200\">职业</th>\n<th class=\"px-4 py-2 font-medium text-black border-b border-gray-200\">技能</th>\n</tr>\n</thead>\n<tbody class=\"divide-y divide-gray-200\">\n<tr class=\"hover:bg-gray-50 transition-colors duration-150\">\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">Alice</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">前端工程师</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">React, TypeScript</td>\n</tr>\n<tr class=\"hover:bg-gray-50 transition-colors duration-150\">\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">Bob</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">后端工程师</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">Node.js, PostgreSQL</td>\n</tr>\n<tr class=\"hover:bg-gray-50 transition-colors duration-150\">\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">Carol</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">设计师</td>\n<td class=\"px-4 py-2 text-black border-b border-gray-200\">Figma, Framer</td>\n</tr>\n</tbody>\n</table>\n<blockquote class=\"border-l-4 border-gray-400 bg-gray-50/60 pl-5 pr-5 py-3 my-6 rounded-xl italic text-gray-900 ring-1 ring-gray-200/30\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">表格下方验证圆角阴影是否生效。</p>\n</blockquote>\n<hr class=\"my-10 border-t border-gray-300/50 rounded-full\">\n<h2 id=\"代码块测试\" class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40\">💻 代码块测试</h2>\n<h3 id=\"javascript\" class=\"text-xl md:text-2xl font-sans font-medium tracking-tight text-gray-900 mt-8 mb-4 scroll-mt-20\">JavaScript</h3>\n<div class=\"relative rounded-2xl ring-1 ring-gray-200 border border-gray-300 overflow-hidden my-6 p-4 pt-8 bg-[#262335]\"><div class=\"absolute top-3 left-4 flex items-center gap-2\"><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FF5F56]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#FFBD2E]\"></button><button class=\"w-3.5 h-3.5 rounded-full transition-all duration-200 hover:scale-110 bg-[#27C93F]\"></button></div><pre class=\"shiki shiki-themes synthwave-84 synthwave-84\" style=\"background-color:#262335;--shiki-dark-bg:#262335;color:#bbbbbb;--shiki-dark:#bbbbbb\" tabindex=\"0\" class=\"bg-[#1e1e1e] text-gray-100 font-mono text-[15px] leading-[1.65] rounded-xl p-6 pt-8 overflow-x-auto border-t border-t-[#353942] [counter-reset:line]\"><code><span class=\"line\"><span style=\"color:#848BBD;--shiki-light-font-style:italic;--shiki-dark:#848BBD;--shiki-dark-font-style:italic\">// 测试语法高亮与 VSCode 风格配色</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D;--shiki-dark:#FEDE5D\">function</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\"> greet</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">(</span><span style=\"color:#FF7EDB;--shiki-light-font-style:italic;--shiki-dark:#FF7EDB;--shiki-dark-font-style:italic\">name</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">  console</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">.</span><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">log</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">(</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\">`Hello, </span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">${</span><span style=\"color:#FF7EDB;--shiki-dark:#FF7EDB\">name</span><span style=\"color:#72F1B8;--shiki-dark:#72F1B8\">}</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\">!`</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">}</span></span>\n<span class=\"line\"><span style=\"color:#36F9F6;--shiki-dark:#36F9F6\">greet</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">(</span><span style=\"color:#FF8B39;--shiki-dark:#FF8B39\">'8023time'</span><span style=\"color:#BBBBBB;--shiki-dark:#BBBBBB\">);</span></span></code></pre></div>\n<section data-footnotes class=\"footnotes\"><h2 class=\"text-2xl md:text-3xl font-sans font-semibold tracking-tight text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-300/40 scroll-mt-20 selection:bg-gray-200/40 sr-only\" id=\"footnotes\">Footnotes</h2>\n<ol class=\"list-none pl-8 my-5 space-y-3 [counter-reset:list-counter] [&#x26;_li]:[counter-increment:list-counter] [&#x26;_li]:before:content-[counter(list-counter)] [&#x26;_li]:before:absolute [&#x26;_li]:before:left-[-2rem] [&#x26;_li]:before:flex [&#x26;_li]:before:items-center [&#x26;_li]:before:justify-center [&#x26;_li]:before:w-6 [&#x26;_li]:before:h-6 [&#x26;_li]:before:rounded-full [&#x26;_li]:before:bg-gray-200 [&#x26;_li]:before:text-black [&#x26;_li]:before:text-sm [&#x26;_li]:before:font-medium [&#x26;_li]:before:shadow-sm\">\n<li id=\"user-content-fn-1\" class=\"text-base text-black leading-relaxed relative\">\n<p class=\"text-base md:text-lg font-sans leading-[1.75] tracking-[0.01em] text-black mb-4 selection:bg-gray-200/40\">这是脚注，验证脚注渲染与分隔线显示。 <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"text-blue-700 underline-offset-4 decoration-blue-400/50 hover:underline hover:decoration-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:rounded-sm transition-all duration-200 ease-out data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>" }}
    />
  );
};

export default MarkdownComponent;
