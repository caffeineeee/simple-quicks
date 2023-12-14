"use client";

import React, { useState, Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { TextField } from "@radix-ui/themes";

import { ChatsData, DUMMY_CHATS_DATA } from './data';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { latoBold } from '@/app/layout';

export function ChatBox() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredChatList, setFilteredChatList] = useState<ChatsData[]>(DUMMY_CHATS_DATA);

    function onSearch(e: React.ChangeEvent<HTMLInputElement>) {

        const value = e.target.value;
        setSearchValue(value);

        if (searchValue.length < 1) {
            setFilteredChatList(DUMMY_CHATS_DATA);
        }
        else {
            const result = DUMMY_CHATS_DATA.filter((data) =>
                data.title?.toLowerCase().includes(value.toLowerCase()),
            );
            setFilteredChatList(result);
        }
        return;
    };
    return (
        <>
            <div className='h-[480px] w-[737px] mb-28 border-[1px] border-[solid] border-[#bdbdbd] bg-[#ffffff] px-[34px] py-5'>
                <div className="w-full h-full flex flex-col">

                    <div className='w-[95%] mb-[2px] text-2xl'>
                        <TextField.Root className='border-2 rounded-lg border-[#828282] text-base w-[666px]'>
                            <div className='flex flex-row items-center pr-[59px]'>
                                <TextField.Input
                                    placeholder="Search"
                                    className='h-8 w-full pl-[59px] outline-none'
                                    autoFocus
                                    value={searchValue}
                                    onChange={onSearch}
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
                    <Suspense
                        fallback={
                            <div className='flex flex-col justify-center items-center h-full'>
                                <TailSpin
                                    height="61.22px"
                                    width="61.22px"
                                    color="#C4C4C4"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    strokeWidth="4px"
                                />
                                <p className='pt-[38px] text-[#4F4F4F]'>Loading Chat List ...</p>
                            </div>
                        }
                    >
                        <div className='overflow-y-scroll scrollbar scrollbar-thumb-[#BDBDBD] scrollbar-w-2 scrollbar-thumb-rounded-full'>
                            {/* Uncomment this to simulate the loading spinner */}
                            {/* {new Promise((resolve) => {
                            setTimeout(resolve, 5000);})} */}
                            {filteredChatList.map((data: ChatsData, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <div className='grid grid-cols-12 pt-4'>
                                            <div className='flex fex-row -space-x-4 col-span-1'>
                                                <div
                                                    className="w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center cursor-pointer"
                                                >
                                                    <Image
                                                        src={'/icons/person-black.svg'}
                                                        width={12}
                                                        height={12}
                                                        style={{ objectFit: 'contain' }}
                                                        alt="person black"
                                                    />
                                                </div>
                                                <div
                                                    className="w-[34px] h-[34px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer"
                                                >

                                                    <Image
                                                        src={'/icons/person-white.svg'}
                                                        width={12}
                                                        height={12}
                                                        style={{ objectFit: 'contain' }}
                                                        alt="person white"
                                                    />
                                                </div>
                                            </div>

                                            <div className='flex flex-row items-start col-span-11'>
                                                <p
                                                    className={cn('ml-2 w-[335.37px] text-lg flex-grow font-semibold text-[#2F80ED] leading-tight', latoBold.className)}
                                                >
                                                    {data.title}
                                                </p>
                                                <p className='pl-5 text-sm'>{data.date}</p>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12 gap-2'>
                                            <div className='ml-2 col-start-2 col-span-11 leading-tight'>
                                                <p className={cn('font-semibold text-[#4F4F4F]', data.lastMessageFrom ? "" : "hidden", latoBold.className)}>{data.lastMessageFrom}:</p>
                                                <p className='line-clamp-1'>{data.lastMessage}</p>
                                            </div>
                                        </div>
                                        <div className='h-[1px] w-full bg-[#828282] mt-5'></div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </Suspense>
                </div>
            </div>
        </>
    );
};