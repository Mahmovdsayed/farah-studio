"use client";

import GalleryCard from "@/components/Ui/GalleryCard";
import { reels, socialMedia } from "@/constant/reelsAndImages";
import { GalleryIcon } from "@/icons/GalleryIcon";
import { VideoIcon } from "@/icons/VideoIcon";
import { Spinner, Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { FaFigma } from "react-icons/fa";
import React, { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import useVisitorTracker from "@/hooks/useVisitorTracker";

const Projects = () => {
    useVisitorTracker("/projects", "Projects");

    const fetchProjectsData = async () => {
        const response = await axiosInstance.get("/projects");
        return response.data;
    };
    const [isVideoLoading, setVideoLoading] = useState(true);
    const { data, isLoading, isError } = useQuery({
        queryFn: fetchProjectsData,
        queryKey: ["projects"],
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div className="flex items-center justify-center my-6"><Spinner color="secondary" /></div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <Tabs
                    color="secondary"
                    size="sm"
                    radius="full"
                    variant="solid"
                    className="font-sharpSansSemiBold flex items-center justify-center pb-2"
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
                            {data?.social.map((rel: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <GalleryCard url={rel.url} />
                                </motion.div>
                            ))}
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
                            {data?.reels.map((rel: any, index: number) => {


                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-xl"
                                        transition={{ duration: 0.5 }}
                                    >
                                        {isVideoLoading ? (
                                            <div
                                                className="flex gap-4 justify-center items-center bg-custom-gradient font-sharpSansSemiBold"
                                                style={{
                                                    width: "100%",
                                                    height: "600px",
                                                    borderRadius: "12px",
                                                }}
                                            >
                                                <Spinner color="secondary" size="md" /> Loading video...
                                            </div>
                                        ) : null}

                                        <ReactPlayer
                                            url={rel.url}
                                            controls
                                            width="100%"
                                            height="600px"
                                            onReady={() => setVideoLoading(false)}
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
                                );
                            })}
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
                    ></Tab>
                </Tabs>
            </div>
        </main>
    );
};

export default Projects;
