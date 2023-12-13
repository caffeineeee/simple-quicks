import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

import { OtherChatBubble } from '@/components/Chats/ChatBubble';
import { OwnChatBubble } from '@/components/Chats/ChatBubble';
import { TextInput } from '@/components/Inputs/TextInput';

import { useChatStore } from '@/hooks/ChatStore';

export function GroupChatDetail() {
  const chatStore = useChatStore();
  return (
    <div className='w-full h-full flex flex-col relative'>
      <div className='px-[34px] pb-[18px] flex justify-between items-center border-b-[1px_solid_#bdbdbd] -ml-[34px] -mr-[34px] my-0 sticky top-[0]'>
        <div className='flex gap-3 items-center'>
          <div className="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
            <AiOutlineArrowLeft width={16} height={16} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[#2f80ed] text-sm font-semibold">
              I - 589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </h4>
            <span className="text-[#333333] text-[10px]">3 Participants</span>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
          <IoIosClose size={'28px'} />
        </div>
      </div>
      <div className="flex flex-col gap-[16px] max-h-[77.5%] overflow-scroll">
        <OwnChatBubble
          text="No worries. It will be completed ASAP. I have asked him yesterday."
          time="19:32"
        />
        <OtherChatBubble
          color="#E5A443"
          bgColor='#FCEED3'
          name="Mary Hilda"
          text="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          time="19:32"
        />
        <OwnChatBubble
          text="Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
          time="19:32"
        />
        <OtherChatBubble
          color="#E5A443"
          bgColor="#FCEED3"
          name="Mary Hilda"
          text="Sure thing, Claren"
          time="19:32"
        />
        <OtherChatBubble
          color="#43B78D"
          bgColor="#D2F2EA"
          name="Obaidullah Amarkhil"
          text="Morning. I'll try to do them. Thanks"
          time="19:32"
        />
      </div>
      <div className="absolute bottom-[0] w-full pt-[8px] flex justify-between items-center">
        <div className="w-[83%] mr-3">
          <TextInput placeholder="Type a new message" />
        </div>
        <button className="flex items-center justify-center text-[#ffffff] bg-[#2f80ed] rounded-[5px] px-[16px] py-[8px] border-[none]">Send</button>
      </div>
    </div>
  );
};