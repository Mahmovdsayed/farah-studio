'use client'

import { Button } from "@nextui-org/react";
import ButtonUi from "../Ui/ButtonUi";
import { HiArrowSmallRight } from "react-icons/hi2";
import GalleryCard from "../Ui/GalleryCard";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IProps { }

const Gallery = ({ }: IProps) => {
    const images = [
        {
            imageURL: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733181897/farah/images/xmknsdnna3uiguc2fqwe.png",
        },
        {
            imageURL: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733181892/farah/images/gzpw7kbic3eh4eyhrqhj.png",
        },
        {
            imageURL: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733181895/farah/images/wmj8n3k5jckevonbupgd.png",
        },
        {
            imageURL: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733181918/farah/images/lr01qdxarznsgydkl746.png",
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            ".gallery-section",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gallery-section",
                    start: "top 100%", 
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div>
            <div className="gallery-section">
                <div className="flex items-center justify-between mt-14">
                    <h4 className="text-xl px-2 md:text-3xl font-sharpSansSemiBold">Gallery</h4>
                    <Button
                        radius="full"
                        className="bg-[#5F5F5F4D] transition-all duration-500 text-white md:text-lg font-sharpSansSemiBold"
                        endContent={<HiArrowSmallRight />}
                    >
                        View More
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {images.map((image: any, index: number) => (
                        <GalleryCard key={index} url={image.imageURL} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
