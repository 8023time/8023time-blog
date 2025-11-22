import React from 'react';
import { type DocMetadata } from '@/generated/catalog-data';
import { useState, useEffect } from 'react';

// 右侧文档标题大纲组件
const DocOutline: React.FC<{
  metadata?: DocMetadata;
}> = ({ metadata }) => {
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    if (!metadata) return;

    // 监听滚动，高亮当前章节
    const handleScroll = () => {
      const headingElements = metadata.headings.map((h) => document.getElementById(h.id)).filter(Boolean);

      let currentHeading = '';
      for (const element of headingElements) {
        if (element && element.getBoundingClientRect().top <= 100) {
          currentHeading = element.id;
        }
      }
      setActiveHeading(currentHeading);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [metadata]);

  if (!metadata) {
    return <div className='p-4 text-gray-500'>请选择一个文档</div>;
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='p-4'>
      <h3 className='mb-3 font-bold text-gray-700 dark:text-gray-300'>目录</h3>
      <hr className='my-2 border-gray-200 dark:border-gray-700' />
      <ul className='space-y-1'>
        {metadata.headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full rounded px-2 py-1 text-left text-sm transition-colors duration-200 ${
                activeHeading === heading.id
                  ? 'bg-blue-100 font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              } `}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocOutline;
