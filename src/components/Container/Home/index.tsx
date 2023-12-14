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
    <div className='flex flex-col w-full h-full min-h-screen bg-[#262626] [transition:all] relative'>
      <div
        className='absolute right-[34px] bottom-1 gap-[26px]'>
        {activeMenu === 'chat' && (
          <ChatBox />
        )}

        {activeMenu === 'task' && (
          <TaskBox />
        )}

        {activeMenu === 'idle' && (
          <div
            className="w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              setActiveMenu('idle');
              setIsShowMenu(!isShowMenu);
            }}
          >
            <Image
              src={'/icons/cloud-lightning.svg'}
              width={56}
              height={56}
              style={{ objectFit: 'contain' }}
              alt="cloud lightning"
            />
          </div>
        )}
      </div>

      <div
        className={cn("flex", activeMenu === "task" ? "flex-row" : "flex-row-reverse")}
      >
        <div
          className={cn("absolute bottom-1", isShowMenu && "hidden", activeMenu === "idle" ? "right-[128px]" : activeMenu === "task" ? "right-[128px]" : "right-[34px]")}
        >
          <ChatButton
            setActiveMenu={setActiveMenu}
            onClick={() => {
              setActiveMenu('chat');
            }}
            isActive={activeMenu === 'chat'}
          />
        </div>

        <div
          className={cn("absolute bottom-1", isShowMenu && "hidden", activeMenu === "idle" ? "right-[214px]" : activeMenu === "chat" ? "right-[128px]" : "right-[34px]")}
        >
          <TaskButton
            setActiveMenu={setActiveMenu}
            onClick={() => {
              setActiveMenu('task');
            }}
            isActive={activeMenu === 'task'}
          />
        </div>
      </div>

    </div>
  );
};
