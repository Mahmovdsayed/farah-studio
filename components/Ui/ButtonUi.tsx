'use client'

import { Button, Link } from "@nextui-org/react";
import { HiArrowSmallRight } from "react-icons/hi2";

interface IProps {
    title: string
}
const ButtonUi = ({ title }: IProps) => {
    return <>
        <Button
            size="sm"
            href="/contact-us"
            as={Link}
            radius="full"
            className="bg-[#FEFCE1] hover:bg-[#9747FF] hover:text-white transition-all duration-500 text-black md:text-lg font-sharpSansSemiBold"
            endContent={<HiArrowSmallRight />}
        >
            {title}
        </Button>
    </>;
};

export default ButtonUi;