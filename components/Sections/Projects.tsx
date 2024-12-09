'use client'

import GalleryCard from "@/components/Ui/GalleryCard";
import { reels, socialMedia } from "@/constant/reelsAndImages";
import { GalleryIcon } from "@/icons/GalleryIcon";
import { VideoIcon } from "@/icons/VideoIcon";
import { Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { FaFigma } from "react-icons/fa";

const Projects = () => {
    return <>
        <main className="min-h-screen">
            <div className="container  mx-auto px-4 py-6">
                <Tabs
                    color="secondary"
                    size="sm"

                    radius="full"
                    variant="solid"
                    className="font-sharpSansSemiBold  flex items-center justify-center pb-2"
                >
                    <Tab
                        key={"social"}
                        title={
                            <div className="flex items-center space-x-2">
                                <GalleryIcon />
                                <span>Social Media</span>
                            </div>
                        }
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {socialMedia.map((rel: any, index: number) =>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: .5, delay: index * 0.3 }}
                                >
                                    <GalleryCard url={rel} />
                                </motion.div>
                            )}
                        </div>
                    </Tab>
                    <Tab
                        key={"reels"}
                        title={
                            <div className="flex items-center space-x-2">
                                <VideoIcon />
                                <span>Reels</span>
                            </div>
                        }
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {reels.map((rel: any, index: number) =>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-xl"
                                    transition={{ duration: .5, delay: index * 0.3 }}
                                >
                                    <ReactPlayer
                                        url={rel}
                                        controls
                                        width="100%"
                                        height="600px"
                                        config={{
                                            youtube: {
                                                playerVars: {
                                                    playsinline: 1,
                                                    controls: 1,
                                                    modestbranding: 1,
                                                },
                                            },
                                        }}
                                    />

                                </motion.div>
                            )}
                        </div>
                    </Tab>
                    <Tab
                        isDisabled
                        title={
                            <div className="flex items-center space-x-2">
                                <FaFigma />
                                <span>Websites</span>
                            </div>
                        }
                    >

                    </Tab>
                </Tabs>
            </div>
        </main >
    </>;
};

export default Projects;