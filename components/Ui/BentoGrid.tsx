'use client';
import { Card, Button, Image, ScrollShadow } from "@nextui-org/react";
import Noise from "./Noise";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IProps { }

const BentoGrid = ({ }: IProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <ScrollShadow hideScrollBar visibility="bottom" size={300} className="overflow-hidden min-w-full">
            <div className="gap-4 grid grid-cols-12 grid-rows-2" ref={ref}>
                <div className="col-span-12 md:col-span-8 h-[300px] relative">
                    <Noise />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <Image
                            alt="Card background"
                            removeWrapper
                            className="object-cover object-center rounded-[50px] w-full h-full"
                            src={"https://i.pinimg.com/564x/d1/5c/ff/d15cffe2af7ffb71791472e8bf565a85.jpg"}
                        />
                    </motion.div>
                </div>

                <div className="col-span-12 md:col-span-4 row-auto h-[300px] md:h-auto md:row-span-2 relative">
                    <Noise />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full h-full"
                    >
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="object-cover object-center rounded-[50px] w-full h-full"
                            src={"https://i.pinimg.com/736x/74/68/5b/74685bd9c59a94d7e237156a837cc063.jpg"}
                        />
                    </motion.div>
                </div>

                <div className="w-full h-[300px] col-span-12 md:col-span-4 relative z-10">
                    <Noise />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full h-full"
                    >
                        <Image
                            alt="Card background"
                            removeWrapper
                            className="object-cover object-center rounded-[50px] w-full h-full"
                            src={"https://i.pinimg.com/564x/67/e2/88/67e288bca37558017fe857de6840b276.jpg"}
                        />
                    </motion.div>
                </div>

                <div className="w-full h-[300px] col-span-12 md:col-span-4 relative z-10">
                    <Noise />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full h-full"
                    >
                        <Image
                            alt="Card background"
                            removeWrapper
                            className="object-cover object-center rounded-[50px] w-full h-full"
                            src={"https://i.pinimg.com/736x/bd/a1/57/bda157f66b6b17c97ee682340230c756.jpg"}
                        />
                    </motion.div>
                </div>
            </div>
        </ScrollShadow>
    );
};

export default BentoGrid;
