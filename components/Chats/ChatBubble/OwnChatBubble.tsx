import React, { FC, useState } from 'react';
import 'twin.macro';

interface OwnChatBubbleProps {
  text: string;
  time: string;
}

const OwnChatBubble: FC<OwnChatBubbleProps> = (props) => {
  const { text, time } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div tw="flex flex-col gap-1 items-end">
      <h3 tw="text-[#9B51E0] font-semibold text-sm">You</h3>
      <div tw="flex items-start">
        <div
          tw="font-bold text-black text-lg mt-[-8px] relative cursor-pointer"
          onMouseLeave={() => setShowMenu(false)}
        >
          <span onClick={() => setShowMenu(true)} tw="pb-[32px] pr-2">
            ...
          </span>
          {showMenu && <ChatMenu />}
        </div>
        <div tw="flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#EEDCFF] max-w-[400px] flex-wrap">
          <span tw="font-light text-[#4F4F4F] text-sm">{text}</span>
          <span tw="text-[#4F4F4F] text-xs">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default OwnChatBubble;

const ChatMenu = () => {
  return (
    <div tw="flex flex-col w-[126px] h-[max-content] rounded-[4px] bg-white border-solid border-[0.5px] border-[#BDBDBD] absolute left-0  z-20">
      <div tw="px-[16px] py-[12px] text-[#2F80ED] text-sm  border-solid border-[#BDBDBD] border-b-[1px] border-x-0 border-t-0 cursor-pointer">
        Edit
      </div>
      <div tw="px-[16px] py-[12px] text-[#EB5757] text-sm cursor-pointer">Delete</div>
    </div>
  );
};
