import React from 'react';

import { BaseChatProps } from '@/types/types';

interface BaseSingleChatProps {
  title: string;
  date: string;
  latestChatText: string;
}

type SingleChatProps = BaseChatProps & BaseSingleChatProps;

export function SingleChat(props: SingleChatProps) {
  const { onClick, title, date, latestChatText } = props;
  return (
    <div
      className='w-full flex justify-between pb-[36px] border-b-[1px_solid_#828282] mt-[24px] cursor-pointer'
      onClick={() => onClick()}
    >
      <div className="flex gap-[16px]">
        <SingleChatIcon />
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-[#2f80ed] text-[14px] font-semibold max-w-[360px]">{title}</h4>
          <span className="text-[#4f4f4f] text-[10px] font-normal">{latestChatText}</span>
        </div>
        <span className="text-xs text-[#4F4F4F]">{date}</span>
      </div>
    </div>
  );
};

function SingleChatIcon() {
  return (
    <div className="flex items-center justify-center bg-[#2F80ED] w-[34px] h-[34px] rounded-full">
      <h3 className="text-sm font-bold text-white">F</h3>
    </div>
  );
}
