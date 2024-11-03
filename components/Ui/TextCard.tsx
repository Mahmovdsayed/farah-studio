'use client'

import { Card } from "@nextui-org/react";

interface IProps {
    title: string
}
const TextCard = ({ title }: IProps) => {
    return <>
        <div className="relative z-10 group">
            <Card shadow="none" className="w-full h-[264px] rounded-[50px] group-hover:bg-[#FFF388] group-hover:text-[#000] bg-[#FBF7EA] border-[#000] border-2  transition-all duration-500 z-20">
                <div className="flex items-center justify-center h-full text-center font-instrument-serif text-[53.59px]">
                    <h4>
                        {title}
                    </h4>
                </div>
            </Card>
            <div className="absolute inset-0 z-0 bg-[#FFF388] border-[#000] border-2 rounded-[50px] translate-y-3 translate-x-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>

        </div>
    </>;
};

export default TextCard;