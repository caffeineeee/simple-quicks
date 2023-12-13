"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState("bottom");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-[118.55px] h-10">
                <Button variant="outline" className="gap-[17px]">
                    My Tasks
                    <Image
                        src="/icons/expand-more-down.svg"
                        width={10}
                        height={6.17}
                        style={{ objectFit: 'contain' }}
                        alt="expand more down"
                    />
                </Button>


            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 h-20">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="personal-errands" className="pl-[15px]">Personal Errands</DropdownMenuRadioItem>
                    <DropdownMenuSeparator className="bg-[#828282]" />
                    <DropdownMenuRadioItem value="urgent-to-do" className="pl-[15px]">Urgent To-Do</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
