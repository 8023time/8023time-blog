import type { Metadata } from 'next';
import Chat from './chat';

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Chat with other users',
};

export default function ChatPage() {
  return <Chat />;
}
