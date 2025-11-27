'use client';

import { useState } from 'react';
import { TiptapEditorContainer } from '@/components/cms/editor';
import { X } from '@/components/icons/actions';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className='flex h-full w-full gap-2 space-y-6'>
      {/* 编辑器 */}
      <div className='h-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white'>
        <TiptapEditorContainer content={content} onChange={setContent} placeholder='开始写作...' />
      </div>

      {/* 文章元数据表单 */}
      <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4'>
        {/* 标题 */}
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-700'>
            文章标题 <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='请输入文章标题...'
            className='w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* 摘要 */}
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-700'>文章摘要</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='请输入文章摘要（用于 SEO 和社交媒体分享）...'
            rows={3}
            className='w-full resize-none rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* 封面图 */}
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-700'>封面图片</label>
          <div className='flex items-center gap-4'>
            <input
              type='text'
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              placeholder='请输入封面图片 URL...'
              className='flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
            />
            {cover && (
              <img
                src={cover}
                alt='封面预览'
                className='h-20 w-20 rounded-lg border border-gray-200 object-cover'
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
          </div>
        </div>

        {/* 标签 */}
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-700'>标签</label>
          <div className='mb-2 flex items-center gap-2'>
            <input
              type='text'
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              placeholder='输入标签后按回车添加...'
              className='flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
            />
            <button
              onClick={handleAddTag}
              className='rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-50'
            >
              添加
            </button>
          </div>
          {tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700'
                >
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className='hover:text-blue-900'>
                    <X className='h-3 w-3' />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 字数统计 */}
        <div className='text-right text-sm text-gray-500'>字数: {content.replace(/<[^>]*>/g, '').length} 字</div>
      </div>
    </div>
  );
}
