import React from 'react';

import { MdOutlinePersonOutline } from 'react-icons/md';
import { BaseChatProps } from '@/types/types';

interface BaseGroupChatProps {
  title: string;
  date: string;
  latestChatName: string;
  latestChatText: string;
}

type GroupChatListProps = BaseChatProps & BaseGroupChatProps;

export function GroupChatList(props: GroupChatListProps) {
  const { onClick, title, date, latestChatName, latestChatText } = props;
  return (
    <div className='w-full flex justify-between pb-[36px] border-b-[1px_solid_#828282] mt-[24px] cursor-pointer' onClick={() => onClick()}>
      <div className="flex gap-[16px]">
        <GroupIcon />
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-[#2f80ed] text-[14px] font-semibold max-w-[360px]">{title}</h4>
          <div className="flex flex-col gap-1">
            <h5 className="text-[#4f4f4f] text-[12px] font-medium">{latestChatName}</h5>
            <span className="text-[#4f4f4f] text-[10px] font-normal">{latestChatText}</span>
          </div>
        </div>
        <span className="text-xs text-[#4F4F4F]">{date}</span>
      </div>
    </div>
  );
};

function GroupIcon() {
  return (
    <div className="relative w-[51px] h-[34px]">
      <div className="flex items-center justify-center bg-[#2F80ED] w-[34px] h-[34px] rounded-full absolute right-0 z-20">
        <MdOutlinePersonOutline height={12} width={12} color={'#ffffff'} />
      </div>
      <div className="flex items-center justify-center bg-[#E0E0E0] w-[34px] h-[34px] rounded-full absolute right-[17px] z-10">
        <MdOutlinePersonOutline height={12} width={12} color={'#000000'} style={{ opacity: '54%' }} />
      </div>
    </div>
  );
};
