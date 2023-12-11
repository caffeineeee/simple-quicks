"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { ChatButton } from '@/components/Buttons/ChatButton';
import { TaskButton } from '@/components/Buttons/TaskButton';
import { ChatBox } from '@/components/Chats';
import { TaskBox } from '@/components/Tasks';
import { cn } from '@/lib/utils';

export type ActiveMenuType = 'idle' | 'chat' | 'task';

export function Home() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>('idle');

  return (
    <div className='w-full h-full min-h-screen bg-[#262626] relative [transition:all]'>
      <div
        className={cn("absolute right-[34px] bottom-[12px] flex gap-[26px] items-end", activeMenu === "task" ? "flex-row" : "flex-row-reverse")}
        onMouseEnter={() => setIsShowMenu(true)}
        onMouseLeave={() => setIsShowMenu(false)}
      >
        {activeMenu === 'chat' && <ChatBox />}

        {activeMenu === 'task' && <TaskBox />}

        {activeMenu === 'idle' && (
          <div
            className="w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex items-center justify-center">
            <Image
              src={'/icons/cloud-lightning.svg'}
              width={56}
              height={56}
              style={{ objectFit: 'contain' }}
              alt="flash icon"
            />
          </div>
        )}

        <div className={cn("", isShowMenu ? "[display:inherit]" : activeMenu === "chat" ? "[display:inherit]" : "hidden")}>
          <ChatButton setActiveMenu={setActiveMenu} onClick={() => setActiveMenu('chat')} isActive={activeMenu === 'chat'} />
        </div>

        <div className={cn("", isShowMenu ? "[display:inherit]" : activeMenu === "task" ? "[display:inherit]" : "hidden")}>
          <TaskButton setActiveMenu={setActiveMenu} onClick={() => setActiveMenu('task')} isActive={activeMenu === 'task'} />
        </div>

      </div>
    </div>
  );
};