'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";

interface IProps {
    text: string
    url: string
}
const ButtonUi = ({ text, url }: IProps) => {
    return <>
        <div className="relative z-10 group">
            <Button
                endContent={<HiArrowSmallRight />}
                data-hover="false"
                className="hover:opacity-100 z-10 text-sm md:text-lg font-medium group-hover:bg-[#2B2B2B] group-hover:text-[#FFF388] bg-[#FFF388] rounded-[66px] text-black border-[#000] border-2 py-4 transition-all duration-500"
                as={Link}
                size="sm"
                target="_blank"
                color="warning"
                radius="none"
                href={url}
                variant="flat"
            >
                {text}
            </Button>

            <div className="absolute inset-0 z-0 bg-[#2B2B2B] border-[#000] border-2 rounded-[66px] translate-y-1 translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
        </div>

    </>;
};

export default ButtonUi;