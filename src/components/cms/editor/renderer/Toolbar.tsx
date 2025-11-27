'use client';

import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link,
  Image as ImageIcon,
} from '@/components/icons/editor';

interface EditorToolbarProps {
  editor: Editor;
}

const ToolbarButton = ({
  onClick,
  isActive,
  children,
  title,
}: {
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  title?: string;
}) => (
  <button
    type='button'
    onClick={onClick}
    title={title}
    className={`rounded p-2 transition-colors ${
      isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

export const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  return (
    <div className='flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 p-2'>
      {/* 文本格式 */}
      <div className='flex items-center gap-1 border-r border-gray-200 pr-2'>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title='粗体 (Ctrl+B)'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title='斜体 (Ctrl+I)'
        >
          <Italic className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          title='删除线'
        >
          <Strikethrough className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          title='行内代码'
        >
          <Code className='h-4 w-4' />
        </ToolbarButton>
      </div>

      {/* 标题 */}
      <div className='flex items-center gap-1 border-r border-gray-200 pr-2'>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          title='标题 1'
        >
          <Heading1 className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          title='标题 2'
        >
          <Heading2 className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
          title='标题 3'
        >
          <Heading3 className='h-4 w-4' />
        </ToolbarButton>
      </div>

      {/* 列表 */}
      <div className='flex items-center gap-1 border-r border-gray-200 pr-2'>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title='无序列表'
        >
          <List className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title='有序列表'
        >
          <ListOrdered className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title='引用'
        >
          <Quote className='h-4 w-4' />
        </ToolbarButton>
      </div>

      {/* 其他操作 */}
      <div className='flex items-center gap-1 border-r border-gray-200 pr-2'>
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title='撤销 (Ctrl+Z)'>
          <Undo className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title='重做 (Ctrl+Y)'>
          <Redo className='h-4 w-4' />
        </ToolbarButton>
      </div>

      {/* 链接和图片 */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          onClick={() => {
            const url = window.prompt('请输入链接地址:');
            if (url) {
              // TODO: 需要安装 @tiptap/extension-link 扩展
              // editor.chain().focus().setLink({ href: url }).run();
              console.warn('Link extension not installed');
            }
          }}
          isActive={false}
          title='插入链接'
        >
          <Link className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            const url = window.prompt('请输入图片地址:');
            if (url) {
              // TODO: 需要安装 @tiptap/extension-image 扩展
              // editor.chain().focus().setImage({ src: url }).run();
              console.warn('Image extension not installed');
            }
          }}
          title='插入图片'
        >
          <ImageIcon className='h-4 w-4' />
        </ToolbarButton>
      </div>
    </div>
  );
};
