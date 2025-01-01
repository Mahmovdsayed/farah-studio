'use client';

import { motion } from "framer-motion";

const MaintenanceMode = () => {
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen text-center md:text-center">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={
                        {
                            background:
                                "linear-gradient(90deg, #000000 0%, #4A3D60 100%, #4A3D60 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        } as React.CSSProperties
                    }
                    className="font-sharpSansBold text-2xl py-2 md:text-4xl"
                >
                    Website Temporarily Disabled
                </motion.h1>

                <motion.p
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    style={
                        {
                            background: "linear-gradient(90deg, #000000 0%, #4A3D60 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        } as React.CSSProperties
                    }
                    className=" text-sm md:text-base font-sharpSansSemiBold text-default-700"
                >
                    The website is currently unavailable until the outstanding payments
                    are cleared.
                </motion.p>
            </div>
        </div>
    );
};

export default MaintenanceMode;
