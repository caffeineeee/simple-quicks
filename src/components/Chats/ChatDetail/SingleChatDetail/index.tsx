import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { OtherChatBubble, OwnChatBubble } from '@/components/Chats/ChatBubble';
import { TextInput } from '@/components/Inputs/TextInput';
import { useChatStore } from '@/hooks/ChatStore';

export function SingleChatDetail() {
  const chatStore = useChatStore();
  return (
    <div className='w-full h-full flex flex-col relative'>
      <div className="border-b-[1px_solid_#bdbdbd] -ml-[34px] -mr-[34px] my-0 sticky top-[0]">
        <div className="px-[34px] pb-[18px] flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
              <AiOutlineArrowLeft width={16} height={16} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[#2f80ed] text-sm font-semibold">FastVisa Support</h4>
            </div>
          </div>
          <div className="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
            <IoIosClose size={'28px'} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] max-h-[77.5%] overflow-scroll">
        <OtherChatBubble
          color="#2F80ED"
          bgColor="#F8F8F8"
          name="FastVisa Support"
          text="Hey there. Welcome to your inbox! Contact us for more information and help about anything! We will send you a response as soon as possible."
          time="19:32"
        />
        <OwnChatBubble text="Hi, I need help with something can you help me ?" time="19:32" />
      </div>
      <div className="absolute bottom-[0] w-full pt-[8px] flex justify-between items-center">
        <div className="w-[83%] mr-3">
          <TextInput placeholder="Type a new message" />
        </div>
        <button className="flex items-center justify-center text-[#ffffff] bg-[#2f80ed] rounded-[5px] px-[16px] py-[8px] border-none">Send</button>
      </div>
    </div>
  );
};