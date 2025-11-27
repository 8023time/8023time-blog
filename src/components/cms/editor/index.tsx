'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { EditorToolbar } from './renderer/Toolbar';

interface TiptapEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

export const TiptapEditorContainer = ({ content = '', onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] px-4 py-6',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className='flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
      <EditorToolbar editor={editor} />
      <div className='border-t border-gray-200'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
