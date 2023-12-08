export interface BaseChatProps {
  onClick: () => void;
}

export type ChatPageType = 'chat-list' | 'single-chat-detail' | 'group-chat-detail';

export type ChatStoreDataType = {
  currentPage: ChatPageType;
  onChatDetail: (onChatDetail: ChatPageType) => void;
  onBack: () => void;
};
