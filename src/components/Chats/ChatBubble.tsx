"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OtherChatBubbleProps {
  bgColor: string;
  color: string;
  name: string;
  text: string;
  time: string;
}

export function OtherChatBubble(props: OtherChatBubbleProps) {
  const { bgColor, color, name, text, time } = props;
  return (
    <div className="flex flex-col gap-1">
      <h3 className={cn("text-[#E5A443] font-semibold text-sm", color)}>
        {name}
      </h3>
      <div className="flex gap-2 items-start">
        <div

          className={cn("flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#FCEED3] h-max  max-w-[400px] flex-wrap", bgColor)}
        >

          <span className="font-light text-[#4F4F4F] text-sm">{text}</span>
          <span className="text-[#4F4F4F] text-xs">{time}</span>
        </div>
        <span className="font-bold text-black text-lg mt-[-8px]">...</span>
      </div>
    </div>
  );
};

interface OwnChatBubbleProps {
  text: string;
  time: string;
}

export function OwnChatBubble(props: OwnChatBubbleProps) {
  const { text, time } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col gap-1 items-end">
      <h3 className="text-[#9B51E0] font-semibold text-sm">You</h3>
      <div className="flex items-start">
        <div
          className="font-bold text-black text-lg mt-[-8px] relative cursor-pointer"
          onMouseLeave={() => setShowMenu(false)}
        >
          <span onClick={() => setShowMenu(true)} className="pb-[32px] pr-2">
            ...
          </span>
          {showMenu && <ChatMenu />}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#EEDCFF] max-w-[400px] flex-wrap">
          <span className="font-light text-[#4F4F4F] text-sm">{text}</span>
          <span className="text-[#4F4F4F] text-xs">{time}</span>
        </div>
      </div>
    </div>
  );
};

function ChatMenu() {
  return (
    <div className="flex flex-col w-[126px] h-max rounded-[4px] bg-white border-solid border-[0.5px] border-[#BDBDBD] absolute left-0  z-20">
      <div className="px-[16px] py-[12px] text-[#2F80ED] text-sm  border-solid border-[#BDBDBD] border-b-[1px] border-x-0 border-t-0 cursor-pointer">
        Edit
      </div>
      <div className="px-[16px] py-[12px] text-[#EB5757] text-sm cursor-pointer">Delete</div>
    </div>
  );
};
