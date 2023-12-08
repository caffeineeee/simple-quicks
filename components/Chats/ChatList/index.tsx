import React, { FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'twin.macro';

import TextInput from '@/components/Inputs/TextInput';
import { useChatStore } from '@/common/stores/ChatStore';

import GroupChatList from './GroupChatList';
import SingleChatList from './SingleChatList';

const ChatList: FC = () => {
  const chatStore = useChatStore();
  const [filteredChatList, setFilteredChatList] = useState<ChatListType>(DUMMMY_CHAT_LIST_DATA);

  const onSearch = (searchValue: string) => {
    if (searchValue.length < 1) setFilteredChatList(DUMMMY_CHAT_LIST_DATA);
    else {
      let result = DUMMMY_CHAT_LIST_DATA.filter((data) =>
        data.title?.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredChatList(result);
    }
    return;
  };

  return (
    <>
      <StyledSearchInput>
        <TextInput
          suffix={<AiOutlineSearch width={12} height={12} />}
          placeholder="Search"
          onChange={(event) => onSearch(String(event.target.value))}
        />
      </StyledSearchInput>
      {filteredChatList.map((data: ChatListData, idx) => {
        if (data.latestChatName !== undefined)
          return (
            <GroupChatList
              title={data.title}
              date={data.date}
              latestChatName={data.latestChatName}
              latestChatText={data.latestChatText}
              onClick={() => chatStore.onChatDetail('group-chat-detail')}
            />
          );
        else
          return (
            <SingleChatList
              title={data.title}
              date={data.date}
              latestChatText={data.latestChatText}
              onClick={() => chatStore.onChatDetail('group-chat-detail')}
            />
          );
      })}
    </>
  );
};

export default ChatList;

const StyledSearchInput = styled.div`
  width: 95%;

  margin-bottom: 2px;

  .suffix-container {
    font-size: 1.5rem !important;
  }

  @media (max-width: 768px) {
    .input-wrapper {
      height: 2.5rem;

      input {
        font-size: 0.75rem !important;
      }
    }
  }
`;

type ChatListData = {
  title: string;
  date: string;
  latestChatName: string | undefined;
  latestChatText: string;
};

type ChatListType = Array<ChatListData>;

const DUMMMY_CHAT_LIST_DATA = [
  {
    title: '109220-Naturalization',
    date: 'January 1,2021 19:10',
    latestChatName: 'Cameron Phillips',
    latestChatText: 'Please check this out!',
  },
  {
    title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    date: '02/06/2021 10:45',
    latestChatName: 'Ellen',
    latestChatText: 'Hey, please read.',
  },
  {
    title: '8405-Diana SALAZAR MUNGUIA',
    date: '01/06/2021 12:19',
    latestChatName: 'Cameron Phillips',
    latestChatText:
      'I understand your initial concerns and thats very valid, Elizabeth. But you ...',
  },
  {
    title: 'FastVisa Support',
    date: '01/06/2021 12:19',
    latestChatName: undefined,
    latestChatText: 'Hey there! Welcome to your inbox.',
  },
] as ChatListType;
