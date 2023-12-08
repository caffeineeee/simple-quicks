import React, { FC } from 'react';
import { css } from 'twin.macro';

interface OtherChatBubbleProps {
  backgroundColor: string;
  color: string;
  name: string;
  text: string;
  time: string;
}

const OtherChatBubble: FC<OtherChatBubbleProps> = (props) => {
  const { backgroundColor, color, name, text, time } = props;
  return (
    <div tw="flex flex-col gap-1">
      <h3 tw="text-[#E5A443] font-semibold text-sm" css={cssNameColor(color)}>
        {name}
      </h3>
      <div tw="flex gap-2 items-start">
        <div
          tw="flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#FCEED3] h-[max-content]  max-w-[400px] flex-wrap"
          css={cssBackgroundColor(backgroundColor)}
        >
          <span tw="font-light text-[#4F4F4F] text-sm">{text}</span>
          <span tw="text-[#4F4F4F] text-xs">{time}</span>
        </div>
        <span tw="font-bold text-black text-lg mt-[-8px]">...</span>
      </div>
    </div>
  );
};

export default OtherChatBubble;

const cssNameColor = (color: string) => css`
  color: ${color} !important;
`;

const cssBackgroundColor = (backgroundColor: string) => css`
  background-color: ${backgroundColor} !important;
`;
