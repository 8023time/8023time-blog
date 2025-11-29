'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage } = useChat({
    onFinish: () => {
      setInput('');
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [messages]);

  // 自动调整文本域高度
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // 回车发送消息
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() && !isLoading) {
      setIsLoading(true);
      await sendMessage({ text: input });
    }
  };

  return (
    <div className='flex h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* 头部标题 - 优化视觉层次 */}
      <div className='border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm'>
        <div className='mx-auto max-w-4xl px-4 py-4 sm:px-6'>
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600'>
              <svg className='h-6 w-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                />
              </svg>
            </div>
            <div>
              <h1 className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl'>
                AI 智能助手
              </h1>
              <p className='text-xs text-gray-500 sm:text-sm'>随时为您解答问题</p>
            </div>
          </div>
        </div>
      </div>

      {/* 消息区域 - 优化布局和动画 */}
      <div className='flex-1 overflow-y-auto px-4 py-6'>
        <div className='mx-auto max-w-4xl space-y-6'>
          {messages.length === 0 ? (
            <div className='flex h-full flex-col items-center justify-center py-16 text-center'>
              <div className='mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-sm'>
                <svg className='h-16 w-16 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                  />
                </svg>
              </div>
              <h2 className='mb-3 text-xl font-semibold text-gray-800'>开始对话</h2>
              <p className='max-w-sm leading-relaxed text-gray-600'>
                输入您的问题，我会尽力帮助您。支持多种问题类型，包括技术咨询、学习指导等。
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300 ${
                  index === messages.length - 1 ? 'slide-in-from-bottom-4' : ''
                }`}
              >
                <div className={`flex max-w-[85%] gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* 头像 - 优化设计 */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-medium text-white shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <span className='text-sm'>你</span>
                    ) : (
                      <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    )}
                  </div>

                  {/* 消息内容 - 优化视觉效果 */}
                  <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-sm transition-all ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-200'
                          : 'border border-gray-200 bg-white text-gray-800 shadow-gray-100'
                      }`}
                    >
                      {message.parts.map((part, partIndex) => {
                        switch (part.type) {
                          case 'text':
                            return (
                              <div
                                key={message.id + partIndex}
                                className='max-w-none leading-relaxed break-words whitespace-pre-wrap'
                                style={{ wordBreak: 'break-word' }}
                              >
                                {part.text}
                              </div>
                            );
                          default:
                            return null;
                        }
                      })}
                    </div>
                    {/* 消息时间 */}
                    <span className='mt-1 px-1 text-xs text-gray-400'>
                      {new Date().toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
          {/* 加载状态 */}
          {isLoading && (
            <div className='animate-in fade-in flex justify-start'>
              <div className='flex max-w-[85%] gap-3'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600'>
                  <svg className='h-4 w-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className='rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm'>
                  <div className='flex space-x-2'>
                    <div className='h-2 w-2 animate-bounce rounded-full bg-gray-400'></div>
                    <div
                      className='h-2 w-2 animate-bounce rounded-full bg-gray-400'
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className='h-2 w-2 animate-bounce rounded-full bg-gray-400'
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 输入区域 - 优化交互体验 */}
      <div className='border-t border-gray-200 bg-white/90 backdrop-blur-sm'>
        <div className='mx-auto max-w-4xl px-4 py-4'>
          <div className='flex items-end gap-3'>
            <div className='relative flex-1'>
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='请输入你的问题... (Enter 发送，Shift + Enter 换行)'
                disabled={isLoading}
                className='w-full resize-none rounded-2xl border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500'
                rows={1}
                style={{ minHeight: '60px', maxHeight: '120px' }}
              />
              {/* 输入提示 */}
              <div className='absolute top-3 right-3'>
                <kbd className='rounded border border-gray-300 bg-gray-100 px-2 py-1 text-xs text-gray-500'>↵</kbd>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className='flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-md transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-lg active:scale-95 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-sm'
            >
              {isLoading ? (
                <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
              ) : (
                <svg className='h-5 w-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              )}
            </button>
          </div>
          {/* 底部提示 */}
          <div className='mt-3 text-center'>
            <p className='text-xs text-gray-500'>智能助手可能会犯错误，请核实重要信息</p>
          </div>
        </div>
      </div>
    </div>
  );
}
