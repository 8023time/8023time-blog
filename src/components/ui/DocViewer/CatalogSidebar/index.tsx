import React, { useState } from 'react';
import { type CatalogNode } from '@/generated/catalog-data';

// 左侧目录组件
const CatalogSidebar: React.FC<{
  data: CatalogNode[];
  selectedPath?: string;
  onSelect: (node: CatalogNode) => void;
  level?: number;
}> = ({ data, selectedPath, onSelect, level = 0 }) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  // 根据层级决定是否显示（只显示第二层和第三层）
  const shouldShow = level === 1 || level === 2;

  return (
    <ul className={`${level === 0 ? '' : 'ml-4'}`}>
      {data.map((node) => {
        const nodeKey = node.path || node.name;
        const isExpanded = expandedFolders.has(nodeKey);
        const isSelected = selectedPath === node.path;

        if (node.type === 'folder') {
          // 文件夹节点
          return (
            <li key={nodeKey} className='my-1'>
              {shouldShow && (
                <button
                  onClick={() => toggleFolder(nodeKey)}
                  className='flex w-full items-center rounded px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  <span className='mr-1'>{isExpanded ? '📂' : '📁'}</span>
                  <span className='font-medium'>{node.name}</span>
                </button>
              )}
              {(isExpanded || !shouldShow) && node.children && (
                <CatalogSidebar
                  data={node.children}
                  selectedPath={selectedPath}
                  onSelect={onSelect}
                  level={level + 1}
                />
              )}
            </li>
          );
        } else {
          // 文件节点（只在第二层和第三层显示）
          if (!shouldShow) return null;

          return (
            <li key={nodeKey} className='my-1'>
              <button
                onClick={() => onSelect(node)}
                className={`flex w-full items-center rounded px-2 py-1 text-left ${
                  isSelected
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } `}
              >
                <span className='mr-1'>📄</span>
                <span>{node.metadata?.title || node.name}</span>
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default CatalogSidebar;
