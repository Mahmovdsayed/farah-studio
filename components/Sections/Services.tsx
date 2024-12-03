'use client';

import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, CardBody } from "@nextui-org/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const services = [
        {
            text: "Web Design",
            description: "I create professional websites that combine creativity and user-friendly designs, focusing on User Experience (UX) and User Interface (UI) to deliver a site that reflects your brand identity and attracts your audience."
        },
        {
            text: "Motion Graphics",
            description: "I deliver eye-catching motion graphics videos with innovative designs and smooth animations that effectively communicate your ideas, whether for ads, social media, or any creative project."
        },
        {
            text: "Social Media",
            description: "I help manage and create outstanding content for your social media pages, using well-crafted strategies to boost engagement, enhance brand awareness, and attract more customers."
        }
    ];

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        // An animation for the h3
        gsap.fromTo(
            "h3",
            {
                opacity: 0,
                y: -30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }
        );

        const cards = document.querySelectorAll('.service-card');

        gsap.from(cards, {
            opacity: 0,
            y: 50,
            duration: .9,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".services-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }, [isClient]);

    return (
        <div className="mt-28">
            <h3 className="text-xl px-2 md:text-3xl font-sharpSansSemiBold">
                Services
            </h3>
            <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
                {services.map((serv, index) => (
                    <div key={index} className="service-card">
                        <Card shadow="none" radius="lg" isPressable className="hover:scale-[1.05]">
                            <CardBody className="flex flex-col gap-2">
                                <h4 id="textshadows" className="font-Roustel text-xl">{serv.text}</h4>
                                <p className="font-sharpSansMedium text-xs text-default-600">{serv.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
