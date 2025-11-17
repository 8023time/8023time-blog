import React, { useState, useEffect, Suspense } from 'react';
import { catalogData, type CatalogNode } from '@/generated/catalog-data';
import CatalogSidebar from './CatalogSidebar';
import DocOutline from './DocOutline';

interface DocViewerProps {
  initialPath?: string;
}

const DocViewer: React.FC<DocViewerProps> = ({ initialPath }) => {
  const [selectedNode, setSelectedNode] = useState<CatalogNode | null>(null);
  const [DocComponent, setDocComponent] = useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 初始化选中的文档节点
  useEffect(() => {
    if (initialPath) {
      const initNode = catalogData.find((node) => node.path === initialPath);
      if (initNode) setSelectedNode(initNode);
    }
  }, [initialPath]);

  // 动态加载文档组件
  useEffect(() => {
    if (!selectedNode || selectedNode.type !== 'file') {
      setDocComponent(null);
      return;
    }

    const loadDoc = async () => {
      setIsLoading(true);
      try {
        const module = await import(`/src/generated/${selectedNode.path}.tsx`);
        setDocComponent(() => module.default);
      } catch (err) {
        console.error(`[DocViewer] Failed to load: ${selectedNode.path}`, err);
        setDocComponent(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadDoc();
  }, [selectedNode]);

  return (
    <div className='flex min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* 左侧目录 */}
      <aside className='sticky top-20 h-[calc(100vh-5rem)] w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4'>
          <CatalogSidebar data={catalogData} selectedPath={selectedNode?.path} onSelect={setSelectedNode} />
        </div>
      </aside>

      {/* 中间文档区（含 Footer） */}
      <main className='flex flex-1 justify-center overflow-y-auto'>
        <div className='w-full max-w-screen-lg px-10 py-12'>
          <Suspense
            fallback={
              <div className='mt-20 animate-pulse text-center text-gray-500 dark:text-gray-400'>文档加载中...</div>
            }
          >
            {isLoading ? (
              <div className='mt-20 animate-pulse text-center text-gray-500 dark:text-gray-400'>
                正在加载文档内容...
              </div>
            ) : DocComponent ? (
              <DocComponent />
            ) : (
              <div className='mt-20 text-center text-gray-500 dark:text-gray-400'>
                <p className='text-lg'>请从左侧目录选择一个文档</p>
              </div>
            )}
          </Suspense>
        </div>
      </main>

      {/* 右侧大纲 */}
      <aside className='sticky top-20 h-[calc(100vh-5rem)] w-72 shrink-0 overflow-y-auto border-l border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
        <DocOutline metadata={selectedNode?.metadata} />
      </aside>
    </div>
  );
};

export default DocViewer;
