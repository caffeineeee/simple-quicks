import React from 'react';
import Image from 'next/image';
import { BaseButtonProps } from '@/types/types';

interface BaseTaskButtonProps {
  isActive: boolean;
}

type TaskButtonProps = BaseButtonProps & BaseTaskButtonProps;

export function TaskButton(props: TaskButtonProps) {
  const { onClick, isActive = false } = props;

  if (isActive)
    return (
      <div className="relative w-[68px] h-[68px]">
        <div className="absolute rounded-full w-[68px] h-[68px] bg-[#4F4F4F] z-0 top-0 left-[-12px]"></div>
        <div className="w-[68px] h-[68px] bg-[#F8B76B] rounded-full flex items-center justify-center z-20 absolute">
          <Image
            src={'/icons/chrome-reader-mode-white.svg'}
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
      <div className="w-[60px] h-full cursor-pointer mb-2 flex flex-col gap-3 items-center justify-center">
        <span className="font-bold text-white text-base">Task</span>
        <div
          className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
          onClick={() => onClick()}
        >
          <Image
            src={'/icons/chrome-reader-mode-yellow.svg'}
            width={27}
            height={27}
            style={{ objectFit: 'contain' }}
            alt="flash icon"
          />
        </div>
      </div>
    );
};