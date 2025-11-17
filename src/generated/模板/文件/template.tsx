
/**
 * @description: 这是一个自动生成的文件,请不要轻易修改它.
 * @source: D:/code/dome/JavaScript/react/react_dome/source/post/模板/文件/template.md
 * @script: scripts/md-to-tsx
 */

import React from 'react';

export const metadata = {
  "title": "模板文件",
  "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/模板/文件/template.tsx",
  "relativePath": "模板/文件/template.md",
  "category": [
    "模板",
    "文件"
  ],
  "headings": [],
  "frontMatter": {
    "title": "模板文件",
    "description": "一句简短的摘要或SEO描述",
    "author": "8023time",
    "avatar": "/images/avatar.png",
    "email": "example@domain.com",
    "date": "2025-11-10 12:00:00",
    "updated": "2025-11-11 09:00:00",
    "cover": "/images/template-cover.webp",
    "banner": "/images/template-banner.webp",
    "pin": false,
    "readingTime": 5,
    "wordCount": 1200
  }
};

const MarkdownComponent: React.FC = () => {
  // 渲染 Markdown 内容，使用 dangerouslySetInnerHTML
  return (
    <div
      className="markdown-content-wrapper prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
};

export default MarkdownComponent;
