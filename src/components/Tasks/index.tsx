"use client";

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import { TailSpin } from 'react-loader-spinner';

import { DropdownMenuRadioGroupDemo } from '@/components/DropdownMenu/DropdownMenu';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { DUMMY_TASKS_DATA } from './data';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function TaskBox() {

    const [value, onChange] = useState<Value>(new Date());
    const [taskStates, setTaskStates] = useState(DUMMY_TASKS_DATA.map(() => ({ isExpandMore: true, isTaskDone: false })));

    const toggleExpandMore = (index: number) => {
        setTaskStates((prevStates) =>
            prevStates.map((state, i) =>
                i === index ? { ...state, isExpandMore: !state.isExpandMore } : state
            )
        );
    };

    const toggleTaskDone = (index: number) => {
        setTaskStates((prevStates) =>
            prevStates.map((state, i) =>
                i === index ? { ...state, isTaskDone: !state.isTaskDone } : state
            )
        );
    };

    return (
        <div className='h-[734px] w-[737px] bottom-20 border-[1px] border-[solid] border-[#bdbdbd] bg-[#ffffff] px-[34px] py-5'>
            <div className="w-full h-full flex flex-col">
                <span className='flex flex-row space-x-[379px]'>
                    <DropdownMenuRadioGroupDemo />
                    <Button variant="outline" className='w-[101px] h-[35px] bg-[#2F80ED] text-white py-[14px] px-4'>New Task</Button>
                </span>

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
                            <p className='pt-[38px] text-[#4F4F4F]'>Loading Task List ...</p>
                        </div>
                    }
                >
                    <div className='overflow-y-scroll scrollbar scrollbar-thumb-[#BDBDBD] scrollbar-w-2 scrollbar-thumb-rounded-full'>
                        {/* Uncomment this to simulate the loading spinner */}
                        {/* {new Promise((resolve) => {
                            setTimeout(resolve, 5000);
                        })} */}
                        {DUMMY_TASKS_DATA.map((data, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <div className='flex flex-row pt-5 items-start'>
                                        <div
                                            className='mt-[2px] cursor-pointer'
                                            onClick={() => toggleTaskDone(idx)}
                                        >
                                            {taskStates[idx].isTaskDone ? <Image
                                                src="/icons/check-box.svg"
                                                width={18}
                                                height={18}
                                                style={{ objectFit: 'contain' }}
                                                alt="check box"
                                            /> : <Image
                                                src="/icons/check-box-outline-blank.svg"
                                                width={18}
                                                height={18}
                                                style={{ objectFit: 'contain' }}
                                                alt="check box outline blank"
                                                className='#000000'
                                            />}
                                        </div>


                                        <p
                                            className={cn('ml-[22px] w-[335.37px] text-sm flex-grow', taskStates[idx].isTaskDone ? "line-through text-[#828282]" : "text-[#4F4F4F]")}
                                        >
                                            {data.title}
                                        </p>

                                        <p className={cn('text-[#EB5757] ml-14 text-sm', taskStates[idx].isExpandMore ? "" : "hidden")}>{data.daysLeft} Days Left</p>

                                        <p className='pl-5 text-sm'>{data.date}</p>

                                        <div
                                            onClick={() => toggleExpandMore(idx)}
                                            className='flex w-5 h-5 ml-[10px] items-center cursor-pointer'
                                        >
                                            {taskStates[idx].isExpandMore ?
                                                <Image
                                                    src="/icons/expand-more-up.svg"
                                                    width={10}
                                                    height={6.17}
                                                    style={{ objectFit: 'contain' }}
                                                    alt="expand more up"
                                                /> : <Image
                                                    src="/icons/expand-more-down.svg"
                                                    width={10}
                                                    height={6.17}
                                                    style={{ objectFit: 'contain' }}
                                                    alt="expand more down"
                                                />
                                            }

                                        </div>
                                        <div className='flex w-5 h-5 ml-3 items-center cursor-pointer'>
                                            <DeleteButtonDropdown />
                                        </div>
                                    </div>
                                    <div className={cn('pt-4', taskStates[idx].isExpandMore ? "" : "hidden")}>
                                        <div className='grid grid-cols-12 gap-2 items-center'>
                                            <Image
                                                src="/icons/schedule.svg"
                                                width={16.67}
                                                height={16.67}
                                                style={{ objectFit: 'contain' }}
                                                alt="schedule"
                                                className='col-start-2 col-span-1'
                                            />
                                            <DatePicker
                                                onChange={onChange}
                                                value={value}
                                                clearIcon={null}
                                                calendarIcon={
                                                    <>
                                                        <Image
                                                            src="/icons/calendar-today.svg"
                                                            width={13.33}
                                                            height={14.67}
                                                            style={{ objectFit: 'contain' }}
                                                            alt="calendar today"
                                                        />
                                                    </>
                                                }
                                                format='dd/MM/yy'
                                                className="w-[193px] h-10 col-span-10"
                                            />

                                        </div>
                                        <div className='grid grid-cols-12 gap-2 pt-4'>
                                            <Image
                                                src="/icons/edit.svg"
                                                width={15}
                                                height={15}
                                                style={{ objectFit: 'contain' }}
                                                alt="edit"
                                                className='col-start-2 col-span-1'
                                            />
                                            <p
                                                className='col-span-10'
                                            >
                                                {data.content ? data.content : "No Description"}
                                            </p>
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
    );
};

function DeleteButtonDropdown() {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
                <DropdownMenuTrigger asChild className="w-[118.55px] h-10">
                    <Image
                        src="/icons/more-horiz-gray.svg"
                        width={14}
                        height={3.5}
                        style={{ objectFit: 'contain' }}
                        alt="more horizontal gray"
                    />

                </DropdownMenuTrigger>
                <DropdownMenuContent className="h-fit">
                    <Button
                        variant="ghost"
                        value="delete"
                        className='pl-[18px] text-[#EB5757] w-[126px] h-[43px] text-base'
                        onClick={() => setOpen(false)}
                    >
                        Delete
                    </Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}