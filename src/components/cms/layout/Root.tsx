import Header from './header/index';
import { Sidebar } from './sidebar';
import type { ReactNode } from 'react';

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='flex flex-1 flex-col bg-[#f8f9fa]'>
        <Header />
        <main className='flex-1 overflow-y-auto p-[10px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c1c1c1] hover:[&::-webkit-scrollbar-thumb]:bg-[#a8a8a8] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f1f1f1]'>
          {children}
        </main>
      </div>
    </div>
  );
}
