import React, { FC, useState } from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import ChatButton from '@/components/Buttons/ChatButton';
import TaskButton from '@/components/Buttons/TaskButton';
import ChatBox from '@/components/Chats';

const Home: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>('idle');

  return (
    <StyledHome isShowMenu={isShowMenu} activeMenu={activeMenu}>
      <div
        className="icon__container"
        onMouseEnter={() => setIsShowMenu(true)}
        onMouseLeave={() => setIsShowMenu(false)}
      >
        {activeMenu === 'chat' && <ChatBox />}

        {activeMenu === 'idle' && (
          <div tw="w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex items-center justify-center">
            <Image
              src={'/icon/icon-flash.svg'}
              width={56}
              height={56}
              style={{ objectFit: 'contain' }}
              alt="flash icon"
            />
          </div>
        )}

        <div className="icon__container__chat">
          <ChatButton onClick={() => setActiveMenu('chat')} isActive={activeMenu === 'chat'} />
        </div>
        <div className="icon__container__task">
          <TaskButton onClick={() => setActiveMenu('task')} isActive={activeMenu === 'task'} />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;

type ActiveMenuType = 'idle' | 'chat' | 'task';

type StyledHomeProps = {
  isShowMenu: boolean;
  activeMenu: ActiveMenuType;
};

const StyledHome = styled.div<StyledHomeProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #262626;
  position: relative;

  .icon__container {
    position: absolute;
    right: 34px;
    bottom: 27px;

    display: flex;
    flex-direction: ${(props) => (props.activeMenu === 'task' ? 'row' : 'row-reverse')};
    gap: 26px;
    min-height: 100px;
    align-items: flex-end;

    .icon__container__chat {
      display: ${(props) =>
        props.isShowMenu ? 'inherit' : props.activeMenu === 'chat' ? 'inherit' : 'none'};
    }

    .icon__container__task {
      display: ${(props) =>
        props.isShowMenu ? 'inherit' : props.activeMenu === 'task' ? 'inherit' : 'none'};
    }
  }

  ${tw`transition-all`}
`;
