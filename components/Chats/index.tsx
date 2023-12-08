import React, { FC } from 'react';
import { styled } from 'twin.macro';

import { useChatStore } from '@/common/stores/ChatStore';
import ChatList from './ChatList';
import { ChatPageType } from '@/common/types/ChatTypes';
import SingleChatDetail from './ChatDetail/SingleChatDetail';
import GroupChatDetail from './ChatDetail/GroupChatDetail';

const ChatBox: FC = () => {
  const chatStore = useChatStore();
  return (
    <StyledChatBox>
      <div className="chat-box__container">{renderChatBoxContent(chatStore.currentPage)}</div>
    </StyledChatBox>
  );
};

export default ChatBox;

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

const StyledChatBox = styled.div`
  position: absolute;
  height: 500px;
  width: 602px;

  bottom: 80px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  padding: 20px 34px;

  .chat-box__container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }
`;
