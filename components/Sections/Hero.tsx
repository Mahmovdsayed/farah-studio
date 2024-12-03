'use client'

import { useEffect } from "react";
import { Image } from "@nextui-org/react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Hero = () => {
    useEffect(() => {
        gsap.fromTo(
            ".hero-image",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 2.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            ".hero-text",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1.8,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="relative min-w-full flex justify-between flex-col md:flex-row p-4 mt-24 md:mt-0">
            <div className="flex flex-col justify-center items-center w-3/4 mx-auto md:w-1/2">
                <div className="hero-image">
                    <Image
                        src="https://res.cloudinary.com/dtpsyi5am/image/upload/v1732665425/edulsdvpfdsoi4gubl65.svg"
                        className="object-cover object-center w-2/3 m-auto"
                        draggable="false"
                        id="imageShadow"
                        alt="image"
                    />
                </div>
                <p
                    className="hero-text text-[15.52px] md:text-[19.95px] lg:text-[19.95px] font-semibold md:font-medium text-center mt-4"
                >
                    Social Media , Motion <br /> Graphics and website
                </p>
                <h2
                    className="hero-text text-[49.8px] md:text-[74px] font-medium text-center font-Roustel relative bottom-5"
                id="textshadows"
                >
                    Designer
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center text-center mt-6 md:w-1/2">
                <h1
                    className="hero-text text-[40.21px] md:text-[54.82px] lg:text-[76.78px] font-sharpSansMedium leading-none mt-10 md:mt-0"
                    style={{
                        background: "linear-gradient(90deg, #FEFCE1 0%, #30283C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Make your
                    <div className="block">
                        <span
                            className="relative z-10 bottom-5"
                            style={{
                                background: "linear-gradient(90deg, #FEFCE1 0%, #30283C 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Brand{" "}
                            <span
                                className="font-Roustel text-[58.21px] md:text-[54.82px] lg:text-[89.78px]"
                                style={{
                                    background: "linear-gradient(90deg, #4A3C60 0%, ##FEFCE1 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                iconic
                            </span>
                        </span>
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
