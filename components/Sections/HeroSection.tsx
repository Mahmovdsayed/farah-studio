'use client';

import { Button, Image, Link } from "@nextui-org/react";
import { motion } from 'framer-motion';
import TextCard from "../Ui/TextCard";
import { useEffect, ReactNode } from "react"; // Import ReactNode
import ButtonUi from "../Ui/ButtonUi";
import BentoGrid from "../Ui/BentoGrid";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

interface IProps { }

const HeroSection = ({ }: IProps) => {
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    return (
        <>
            <section className="relative min-h-full min-w-full flex justify-between flex-col md:flex-row p-4">
                {/* Left Section */}
                <div className="flex flex-col justify-center items-center md:w-1/2">
                    <AnimatedItem>
                        <Image
                            src="https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730666268/iixmgsaldlzzmoul1x8v.svg"
                            alt="Farah Studio"
                            className="w-[276.03px] md:w-full h-auto object-cover object-center"
                        />
                    </AnimatedItem>
                    <AnimatedItem delay={0.2}>
                        <p className="text-[15.52px] md:text-[19.95px] lg:text-[19.95px] font-semibold md:font-medium text-center mt-4">
                            Social Media ・ Motion Graphics ・ website
                        </p>
                    </AnimatedItem>
                    <AnimatedItem delay={0.4}>
                        <h2 className="text-[49.8px] md:text-[64px] font-medium text-center font-instrument-serif-italic">
                            Designer
                        </h2>
                    </AnimatedItem>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center items-center text-center md:w-1/2">
                    <AnimatedItem delay={0.6}>
                        <h1 className="text-[48.21px] md:text-[54.82px] lg:text-[76.78px] font-instrument-serif-italic">
                            Make your
                            <div className="block relative">
                                <span className="relative z-10 text-black">Brand iconic</span>
                                <div className="absolute top-full left-0 z-0">
                                    <Image
                                        src="https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730671101/ne158uzryj4evr5sjbih.svg"
                                        alt="Icon"
                                        className="mt-[-50px] md:mt-[-65px] "
                                    />
                                </div>
                            </div>
                        </h1>
                    </AnimatedItem>
                </div>
            </section>

            <BenefitsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

const AnimatedItem = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
};

const BenefitsSection = () => {
    return (
        <section className="">
            <div className="flex items-start flex-col justify-start mt-36">
                <AnimatedItem>
                    <span className="text-[17.12px] md:text-[#2b2b2b] md:text-[28.36px]">Benefits</span>
                </AnimatedItem>
                <AnimatedItem>
                    <hr className="border-t-2 border-dashed md:w-[435px]" style={{ borderColor: '#2B2B2B' }} />
                </AnimatedItem>
            </div>

            <AnimatedItem>
                <h3 className="font-instrument-serif leading-[90px] text-start font-medium text-4xl md:text-[94.5px]">
                    Reasons to work with me
                </h3>
            </AnimatedItem>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.3 }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-20 px-5"
            >
                {['Stunning', 'Simple', 'Specialized'].map((title, index) => (
                    <AnimatedItem key={index}>
                        <TextCard title={title} />
                    </AnimatedItem>
                ))}
            </motion.div>
        </section>
    );
};

const ProjectsSection = () => {
    return (
        <section className="">
            <div className="flex items-start flex-col justify-start mt-36">
                <AnimatedItem>
                    <span className="text-[17.12px] md:text-[#2b2b2b] md:text-[28.36px]">Projects</span>
                </AnimatedItem>
                <AnimatedItem>
                    <hr className="border-t-2 border-dashed md:w-[435px]" style={{ borderColor: '#2B2B2B' }} />
                </AnimatedItem>
            </div>
            <div className="flex items-center justify-between md:my-8 ">
                <AnimatedItem>
                    <h3 className="font-instrument-serif leading-[90px] text-start font-medium text-4xl md:text-[94.5px]">
                        Latest projects
                    </h3>
                </AnimatedItem>
                <ButtonUi text="View more" />
            </div>
            <div className="">
                <BentoGrid />
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="">
            <div className="flex items-center flex-col justify-center mt-36">
                <hr className="border-t-2 border-dashed w-[300px] md:w-[600px]" style={{ borderColor: '#2B2B2B' }} />
            </div>
            <AnimatedItem>
                <h3 className="font-instrument-serif leading-[90px] text-center font-medium text-4xl md:text-[60.5px] mt-2">
                    Get in touch
                </h3>
                <p className="text-sm font-semibold md:font-medium text-center">
                    Social Media ・ Motion Graphics ・ website
                </p>
            </AnimatedItem>
            <div className="flex items-center justify-center gap-2 mt-3">
                <Button isIconOnly as={Link} className="bg-transparent border-black border-1 text-medium" radius="full" size="sm"><FaFacebookF /></Button>
                <Button isIconOnly as={Link} className="bg-transparent border-black border-1 text-medium" radius="full" size="sm"><FaInstagram /></Button>
                <Button isIconOnly as={Link} className="bg-transparent border-black border-1 text-medium" radius="full" size="sm"><FaBehance /></Button>
            </div>
            <ContactInfo />
            <Footer />
        </section>
    );
};

const ContactInfo = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-start md:justify-center items-start md:items-center my-3 w-full">
            <div className="flex flex-col items-start justify-start text-start gap-6">
                <div className="block">
                    <h2 className="font-bold">Contact Number</h2>
                    <span>01068487314</span>
                </div>
                <div className="block">
                    <h2 className="font-bold">Email address</h2>
                    <span>farahmoahmed10@gmail.com</span>
                </div>
                <div className="block">
                    <h2 className="font-bold">Location</h2>
                    <span>Cairo, Egypt</span>
                </div>
            </div>
            <div className="text-center md:flex md:justify-end mb-6">
                <p className="md:w-1/2 font-space-grotesk-medium text-sm md:text-base font-medium">
                    Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.
                </p>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="flex text-center flex-col items-center justify-center text-sm md:text-base font-space-grotesk-medium font-medium border-t-1 border-[#000] md:w-1/2 mx-auto border-dashed">
            <p className="mt-3">© 2024 <span className="font-instrument-serif font-semibold">Farah Studio</span>. All Rights Reserved</p>
            <p className="">Powered by <span className="font-bold">NEST</span></p>
        </div>
    );
};

export default HeroSection;
