'use client'

import useVisitorTracker from "@/hooks/useVisitorTracker";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"; // Import framer-motion

interface IProps { }

const About = ({ }: IProps) => {
    useVisitorTracker("/about","About");
    return (
        <>
            <div className="relative min-w-full flex justify-between flex-col md:flex-row p-4 mt-14 md:mt-24">
                <motion.div
                    className="flex flex-col justify-start items-start w-3/4 mx-auto md:w-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="hero-image">
                        <Image
                            src="https://res.cloudinary.com/dtpsyi5am/image/upload/v1732665425/edulsdvpfdsoi4gubl65.svg"
                            className="object-cover object-center w-2/3 m-auto"
                            draggable="false"
                            id="imageShadow"
                            alt="image"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start mt-6 md:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1
                        className="hero-text text-[30.21px] md:text-[44.82px] lg:text-[66.78px] font-sharpSansMedium leading-none mt-10 md:mt-0"
                        style={{
                            background: "linear-gradient(90deg, #FEFCE1 0%, #30283C 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        I’m Farah Mohamed,
                        <div className="block">
                            <span
                                className="font-Roustel text-[48.21px] md:text-[44.82px] lg:text-[79.78px]"
                                style={{
                                    background: "linear-gradient(90deg, #4A3C60 0%, ##FEFCE1 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Graphic Designer
                            </span>
                        </div>
                    </h1>
                </motion.div>
            </div>

            <div className="relative min-w-full flex justify-between flex-col md:flex-row p-4 mt-24">
                <motion.div
                    className="flex flex-col text-start mt-6 md:w-1/3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="font-sharpSansBold text-3xl">Education</h3>
                    <div className="space-y-4 my-3 font-sharpSansMedium text-default-600">
                        <p>- A third-year undergraduate student pursuing a
                            degree in <span id="textshadows" className="font-Roustel text-2xl mx-2">Graphic design</span> at AOU</p>
                        <p>- Photoshop Certification (ITI)</p>
                        <p>- UI/UX , Web Design Certification (Route Academy)</p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col text-start mt-6 md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="font-sharpSansBold text-3xl">Experience</h3>
                    <p className="my-3 font-sharpSansMedium text-default-600">
                        - 2D motion graphics, graphic designer at Ripple mark from July till now
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default About;
