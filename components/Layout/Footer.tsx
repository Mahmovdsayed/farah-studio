'use client'

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface IProps { }

const Footer = ({ }: IProps) => {
    const router = useRouter()
    return (
        <div className=" bg-gradient-to-b from-[#0E100F] to-black p-4 mt-14  transform ">
            <div className="flex flex-col justify-center items-center md:items-center my-3 w-full">
                <div className="footer-content flex flex-col items-center justify-center text-center gap-2">
                    <h3 className="font-sharpSansBold text-4xl md:text-5xl ">Get in touch</h3>
                    <p className="font-sharpSansMedium text-sm md:text-xl ">Social Media, Motion Graphics and website designer</p>
                    <span className="text-xs md:text-base ">Cairo, Egypt</span>
                </div>
            </div>

            <div className="text-center flex justify-center mb-6">
                <p className="md:w-1/2 font-sharpSansMedium text-sm md:text-base font-medium opacity-65">
                    Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center border-t border-dashed opacity-75">
                <p className="mt-3 text-tiny md:text-base flex items-center gap-1">© 2024 <span className="font-instrument-serif font-sharpSansSemiBold">Farah Studio</span>. All Rights Reserved</p>
                <p className="mt-2 text-tiny md:text-base flex items-center gap-1">Powered by <span onClick={() => router.push("https://www.instagram.com/nest.dev/")} className="font-sharpSansBold cursor-pointer hover:underline">NEST</span></p>
            </div>
        </div>
    );
};

export default Footer;
