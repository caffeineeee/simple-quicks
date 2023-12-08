import React, { FC } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { styled } from 'twin.macro';

import { BaseChatProps } from '@/common/types/ChatTypes';

interface BaseGroupChatProps {
  title: string;
  date: string;
  latestChatName: string;
  latestChatText: string;
}

type GroupChatListProps = BaseChatProps & BaseGroupChatProps;

const GroupChatList: FC<GroupChatListProps> = (props) => {
  const { onClick, title, date, latestChatName, latestChatText } = props;
  return (
    <StyledGroupChatList onClick={() => onClick()}>
      <div className="chat__container">
        <GroupIcon />
        <div className="chat-content__container">
          <h4 className="group-name">{title}</h4>
          <div tw="flex flex-col gap-1">
            <h5 className="person-name">{latestChatName}</h5>
            <span className="chat-text">{latestChatText}</span>
          </div>
        </div>
        <span tw="text-xs text-[#4F4F4F]">{date}</span>
      </div>
    </StyledGroupChatList>
  );
};

export default GroupChatList;

const StyledGroupChatList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  border-bottom: 1px solid #828282;
  margin-top: 24px;
  cursor: pointer;

  .chat__container {
    display: flex;
    gap: 16px;
  }

  .chat-content__container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .group-name {
    color: #2f80ed;
    font-size: 14px;
    font-weight: 600;
    max-width: 360px;
  }

  .person-name {
    color: #4f4f4f;
    font-size: 12px;
    font-weight: 500;
  }

  .chat-text {
    color: #4f4f4f;
    font-size: 10px;
    font-weight: 400;
  }
`;

const GroupIcon = () => (
  <div tw="relative w-[51px] h-[34px]">
    <div tw="flex items-center justify-center bg-[#2F80ED] w-[34px] h-[34px] rounded-full absolute right-0 z-20">
      <MdOutlinePersonOutline height={12} width={12} color={'#ffffff'} />
    </div>
    <div tw="flex items-center justify-center bg-[#E0E0E0] w-[34px] h-[34px] rounded-full absolute right-[17px] z-10">
      <MdOutlinePersonOutline height={12} width={12} color={'#000000'} style={{ opacity: '54%' }} />
    </div>
  </div>
);
