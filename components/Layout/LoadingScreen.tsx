'use client'
import { motion } from "framer-motion";

const LoadingScreen = () => {
    return <>
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.h3
                className="text-4xl md:text-6xl font-sharpSansSemiBold text-center my-3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Farah Studio
            </motion.h3>

            <motion.h4
                className="text-default-600 font-sharpSansMedium text-tiny"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: "easeOut",
                }}
            >
                powered by NEST
            </motion.h4>
        </div>
    </>;
};

export default LoadingScreen;