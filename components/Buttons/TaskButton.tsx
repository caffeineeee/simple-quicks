import React, { FC } from 'react';
import Image from 'next/image';
import 'twin.macro';
import { BaseButtonProps } from '@/common/types';

interface BaseTaskButtonProps {
  isActive: boolean;
}

type TaskButtonProps = BaseButtonProps & BaseTaskButtonProps;

const TaskButton: FC<TaskButtonProps> = (props) => {
  const { onClick, isActive = false } = props;

  if (isActive)
    return (
      <div tw="relative w-[68px] h-[68px]">
        <div tw="absolute rounded-full w-[68px] h-[68px] bg-[#4F4F4F] z-0 top-0 left-[-12px]"></div>
        <div tw="w-[68px] h-[68px] bg-[#F8B76B] rounded-full flex items-center justify-center z-20 absolute">
          <Image
            src={'/icon/icon-task-active.svg'}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
            alt="flash icon"
          />
        </div>
      </div>
    );
  else
    return (
      <div tw="w-[60px] h-full cursor-pointer mb-2 flex flex-col gap-3 items-center justify-center">
        <span tw="font-bold text-white text-base">Task</span>
        <div
          tw="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
          onClick={() => onClick()}
        >
          <Image
            src={'/icon/icon-task.svg'}
            width={27}
            height={27}
            style={{ objectFit: 'contain' }}
            alt="flash icon"
          />
        </div>
      </div>
    );
};
export default TaskButton;
