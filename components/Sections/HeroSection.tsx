'use client'

import { Image } from "@nextui-org/react";

interface IProps {

}
const HeroSection = ({ }: IProps) => {
    return <>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
                <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center">
                    <Image
                        src="https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730666268/iixmgsaldlzzmoul1x8v.svg"
                        alt="Farah Studio"
                        className="w-[276.03px] md:w-full h-auto object-cover object-center"
                    />
                    <p className="text-[15.52px] md:text-[19.95px] lg:text-[19.95px] font-semibold md:font-medium  text-center mt-4">Social Media ・ Motion Graphics ・ website</p>
                    <h2 className="text-[49.8px] md:text-[64px] font-medium  font-instrument-serif-italic">Designer</h2>
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center text-center">
                    <h1 className="text-[48.21px] md:text-[54.82px] lg:text-[82.78px] font-instrument-serif-italic">Make your <span className="block">Brand iconic</span></h1>
                </div>
            </div>
        </section>
    </>;
};

export default HeroSection;