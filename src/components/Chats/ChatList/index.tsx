"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { TextInput } from '@/components/Inputs/TextInput';
import { useChatStore } from '@/hooks/ChatStore';

import { GroupChatList } from './GroupChatList';
import { SingleChat } from './SingleChatList';

export function ChatList() {
  const chatStore = useChatStore();
  const [filteredChatList, setFilteredChatList] = useState<ChatListType>(DUMMMY_CHAT_LIST_DATA);

  function onSearch(searchValue: string) {
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
      {/* <StyledSearchInput> */}
      <div className='w-[95%] mb-[2px] text-2xl'>
        <TextInput
          suffix={<AiOutlineSearch width={12} height={12} />}
          placeholder="Search"
          onChange={(event) => onSearch(String(event.target.value))}
        />
      </div>
      {/* </StyledSearchInput> */}
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
            <SingleChat
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
