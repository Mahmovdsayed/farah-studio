'use client'

import { Image } from "@nextui-org/react";
import { motion } from 'framer-motion';
import TextCard from "../Ui/TextCard";
import { useEffect } from "react";

interface IProps { }

const HeroSection = ({ }: IProps) => {
    useEffect(() => {

        window.scrollTo({ behavior: 'smooth', top: 0 })

    }, [])

    return <>
        <section className="relative min-h-full min-w-full flex justify-between flex-col md:flex-row p-4">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730666268/iixmgsaldlzzmoul1x8v.svg"
                        alt="Farah Studio"
                        className="w-[276.03px] md:w-full h-auto object-cover object-center"
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[15.52px] md:text-[19.95px] lg:text-[19.95px] font-semibold md:font-medium text-center mt-4"
                >
                    Social Media ・ Motion Graphics ・ website
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-[49.8px] md:text-[64px] font-medium text-center font-instrument-serif-italic"
                >
                    Designer
                </motion.h2>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center text-center md:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-[48.21px] md:text-[54.82px] lg:text-[76.78px] font-instrument-serif-italic"
                >
                    Make your
                    <div className="block relative">
                        <span className="relative z-10 text-black">Brand iconic</span>
                        <div className="absolute top-full left-0 z-0">
                            <Image
                                src="https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730671101/ne158uzryj4evr5sjbih.svg"
                                alt="Icon"
                                className="mt-[-50px] md:mt-[-65px] bg-warning-200"
                            />
                        </div>
                    </div>
                </motion.h1>
            </div>
        </section>

        <section className="min-h-screen">
            <div className="flex items-start flex-col justify-start mt-36">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-[17.12px] md:text-[#2b2b2b] md:text-[28.36px]"
                >
                    Benefits
                </motion.span>
                <motion.hr
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="border-t-2 border-dashed md:w-[435px]"
                    style={{ borderColor: '#2B2B2B' }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="md:my-8 text-start"
            >
                <h3 className="font-instrument-serif leading-[90px] text-start font-medium text-4xl md:text-[94.5px]">
                    Reasons to work with me
                </h3>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.3, delayChildren: 1.4 }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-20 px-5"
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <TextCard title="Stunning" />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <TextCard title="Simple" />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <TextCard title="Specialized" />
                </motion.div>
            </motion.div>
        </section>
    </>;
};

export default HeroSection;
