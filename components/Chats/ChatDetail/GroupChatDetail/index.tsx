import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { OtherChatBubble, OwnChatBubble } from '../../ChatBubble';
import TextInput from '@/components/Inputs/TextInput';
import { useChatStore } from '@/common/stores/ChatStore';

const GroupChatDetail: FC = () => {
  const chatStore = useChatStore();
  return (
    <StyledGroupChatDetail>
      <div className="group-chat__header">
        <div tw="px-[34px] pb-[18px] flex justify-between items-center">
          <div tw="flex gap-3 items-center">
            <div tw="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
              <AiOutlineArrowLeft width={16} height={16} />
            </div>
            <div tw="flex flex-col gap-1">
              <h4 className="title-text">
                I - 589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
              </h4>
              <span className="subtitle-text">3 Participants</span>
            </div>
          </div>
          <div tw="cursor-pointer hover:scale-105" onClick={() => chatStore.onBack()}>
            <IoIosClose size={'28px'} />
          </div>
        </div>
      </div>
      <div className="group-chat__content">
        <OwnChatBubble
          text="No worries. It will be completed ASAP. I have asked him yesterday."
          time="19:32"
        />
        <OtherChatBubble
          color="#E5A443"
          backgroundColor="#FCEED3"
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
          backgroundColor="#FCEED3"
          name="Mary Hilda"
          text="Sure thing, Claren"
          time="19:32"
        />
        <OtherChatBubble
          color="#43B78D"
          backgroundColor="#D2F2EA"
          name="Obaidullah Amarkhil"
          text="Morning. I’ll try to do them. Thanks"
          time="19:32"
        />
      </div>
      <div className="group-chat__footer">
        <div tw="w-[83%] mr-3">
          <TextInput placeholder="Type a new message" />
        </div>
        <button className="button-send">Send</button>
      </div>
    </StyledGroupChatDetail>
  );
};

export default GroupChatDetail;

const StyledGroupChatDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .group-chat__header {
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

  .group-chat__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 77.5%;
    overflow: scroll;
  }

  .group-chat__footer {
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
