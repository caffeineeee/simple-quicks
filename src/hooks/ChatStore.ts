import { create } from 'zustand';
import { ChatStoreDataType, ChatPageType } from '@/types/types';

export const useChatStore = create<ChatStoreDataType>((set) => ({
  currentPage: 'chat-list',
  onChatDetail: (onChatDetail: ChatPageType) =>
    set(() => ({
      currentPage: onChatDetail,
    })),
  onBack: () =>
    set(() => ({
      currentPage: 'chat-list',
    })),
}));
