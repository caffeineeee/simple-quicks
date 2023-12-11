import React from 'react';

import { useChatStore } from '@/hooks/ChatStore';
import { ChatList } from '@/components/Chats/ChatList/';
import { ChatPageType } from '@/types/types';
import { SingleChatDetail } from '@/components/Chats/ChatDetail/SingleChatDetail';
import { GroupChatDetail } from '@/components/Chats/ChatDetail/GroupChatDetail';

export function ChatBox() {
  const chatStore = useChatStore();
  return (
    <div className='absolute h-[734px] w-[737px] bottom-[80px] border-[1px] border-[solid] border-[#bdbdbd] bg-[#ffffff] px-[34px] py-[20px]'>
      <div className="w-full h-full flex flex-col">{renderChatBoxContent(chatStore.currentPage)}</div>
    </div>
  );
};

const renderChatBoxContent = (currentPage: ChatPageType) => {
  switch (currentPage) {
    case 'chat-list':
      return <ChatList />;
    case 'single-chat-detail':
      return <SingleChatDetail />;
    case 'group-chat-detail':
      return <GroupChatDetail />;
    default:
      return <ChatList />;
  }
};