import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { OtherChatBubble, OwnChatBubble } from '../../ChatBubble';
import TextInput from '@/components/Inputs/TextInput';
import { useChatStore } from '@/common/stores/ChatStore';

const SingleChatDetail: FC = () => {
  const chatStore = useChatStore();
  return (
    <StyledSingleChatDetail>
      <div className="single-chat__header">
        <div tw="px-[34px] pb-[18px] flex justify-between items-center">
          <div tw="flex gap-3 items-center">
            <div tw="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
              <AiOutlineArrowLeft width={16} height={16} />
            </div>
            <div tw="flex flex-col gap-1">
              <h4 className="title-text">FastVisa Support</h4>
            </div>
          </div>
          <div tw="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
            <IoIosClose size={'28px'} />
          </div>
        </div>
      </div>
      <div className="single-chat__content">
        <OtherChatBubble
          color="#2F80ED"
          backgroundColor="#F8F8F8"
          name="FastVisa Support"
          text="Hey there. Welcome to your inbox! Contact us for more information and help about anything! We will send you a response as soon as possible."
          time="19:32"
        />
        <OwnChatBubble text="Hi, I need help with something can you help me ?" time="19:32" />
      </div>
      <div className="single-chat__footer">
        <div tw="w-[83%] mr-3">
          <TextInput placeholder="Type a new message" />
        </div>
        <button className="button-send">Send</button>
      </div>
    </StyledSingleChatDetail>
  );
};

export default SingleChatDetail;

const StyledSingleChatDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .single-chat__header {
    border-bottom: 1px solid #bdbdbd;
    margin: 0px -34px 12px -34px;
    position: sticky;
    top: 0;

    .title-text {
      color: #2f80ed;
      font-size: 16px;
      font-weight: 600;
    }

    .subtitle-text {
      color: #333333;
      font-size: 10px;
    }
  }

  .single-chat__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 77.5%;
    overflow: scroll;
  }

  .single-chat__footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button-send {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background-color: #2f80ed;
      border-radius: 5px;
      padding: 8px 16px;
      border: none;
    }
  }
`;
