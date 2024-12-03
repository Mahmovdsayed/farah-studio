'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IProps { }

const Footer = ({ }: IProps) => {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(".footer-section", {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "bounce.inOut",
                    });

                    gsap.to(".footer-content h3", {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "bounce.inOut",
                    });

                    gsap.to(".footer-content p", {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "bounce.inOut",
                    });

                    gsap.to(".footer-content span", {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "bounce.inOut",
                    });
                }
            });
        }, {
            threshold: 0.5,
        });

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div ref={footerRef} className="footer-section bg-gradient-to-b from-[#0E100F] to-black p-4 mt-14 opacity-0 transform translate-y-10">
            <div className="flex flex-col justify-center items-center md:items-center my-3 w-full">
                <div className="footer-content flex flex-col items-center justify-center text-center gap-2">
                    <h3 className="font-sharpSansBold text-4xl md:text-5xl opacity-0 transform translate-y-10">Get in touch</h3>
                    <p className="font-sharpSansMedium text-sm md:text-xl opacity-0 transform translate-y-10">Social Media, Motion Graphics and website designer</p>
                    <span className="text-xs md:text-base opacity-0 transform translate-y-10">Cairo, Egypt</span>
                </div>
            </div>

            <div className="text-center flex justify-center mb-6">
                <p className="md:w-1/2 font-sharpSansMedium text-sm md:text-base font-medium opacity-65">
                    Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.
                </p>
            </div>

            <div className="flex text-center flex-col items-center justify-center border-t border-dashed opacity-75">
                <p className="mt-3 text-tiny md:text-base">© 2024 <span className="font-instrument-serif font-sharpSansSemiBold">Farah Studio</span>. All Rights Reserved</p>
                <p className="mt-2 text-tiny md:text-base">Powered by <span className="font-sharpSansBold">NEST</span></p>
            </div>
        </div>
    );
};

export default Footer;
