import type { Metadata } from 'next';
import Chat from './chat';

export const metadata: Metadata = {
  title: 'AI聊天',
};

export default function ChatPage() {
  return <Chat />;
}
