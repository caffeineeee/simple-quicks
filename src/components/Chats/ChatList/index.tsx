"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField } from "@radix-ui/themes";

import { TextInput } from '@/components/Inputs/TextInput';
import { Input } from "@/components/ui/input";
import { useChatStore } from '@/hooks/ChatStore';

import { GroupChatList } from './GroupChatList';
import { SingleChat } from './SingleChatList';
import Image from 'next/image';

export function ChatList() {
  const chatStore = useChatStore();
  const [filteredChatList, setFilteredChatList] = useState<ChatListType>(DUMMY_CHAT_LIST_DATA);

  function onSearch(searchValue: string) {
    if (searchValue.length < 1) setFilteredChatList(DUMMY_CHAT_LIST_DATA);
    else {
      let result = DUMMY_CHAT_LIST_DATA.filter((data) =>
        data.title?.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredChatList(result);
    }
    return;
  };

  return (
    <>
      <div className='w-[95%] mb-[2px] text-2xl'>
        {/* <TextInput
          suffix={<AiOutlineSearch width={12} height={12} />}
          placeholder="Search"
          onChange={(event: { target: { value: string; }; }) => onSearch(String(event.target.value))}
          className='w-full'
          autoFocus
        /> */}
        {/* <Input /> */}
        <TextField.Root className='border-2 rounded-lg border-[#828282] text-base w-[666px]'>
          <div className='flex flex-row items-center pl-[1.8px] pr-[59px]'>
            <TextField.Input
              placeholder="Search"
              className='h-8 w-full pl-[59px]'
            />
            <TextField.Slot>
              <Image
                src="/icons/search.svg"
                width={12}
                height={12}
                style={{ objectFit: 'contain' }}
                alt="search"
                className=''
              />
            </TextField.Slot>

          </div>
        </TextField.Root>




      </div>
      {filteredChatList.map((data: ChatListData, idx) => {
        if (data.latestChatName) {
          return (
            <GroupChatList
              title={data.title}
              date={data.date}
              latestChatName={data.latestChatName}
              latestChatText={data.latestChatText}
              onClick={() => chatStore.onChatDetail('group-chat-detail')}
            />
          );
        } else {
          return (
            <SingleChat
              title={data.title}
              date={data.date}
              latestChatText={data.latestChatText}
              onClick={() => chatStore.onChatDetail('group-chat-detail')}
            />
          );
        }
      })}
    </>
  );
};

type ChatListData = {
  title: string;
  date: string;
  latestChatName?: string;
  latestChatText: string;
};

type ChatListType = ChatListData[];

const DUMMY_CHAT_LIST_DATA: ChatListType = [
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
    latestChatText: 'Hey there! Welcome to your inbox.',
  },
];
