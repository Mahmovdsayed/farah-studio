"use client";

import GalleryCard from "@/components/Ui/GalleryCard";
import { reels, socialMedia } from "@/constant/reelsAndImages";
import { GalleryIcon } from "@/icons/GalleryIcon";
import { VideoIcon } from "@/icons/VideoIcon";
import { Select, SelectItem, Spinner, Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { FaFigma, FaPlay } from "react-icons/fa";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useVisitorTracker from "@/hooks/useVisitorTracker";
import { BiSort } from "react-icons/bi";
import axios from "axios"
import { Iphone15Pro } from "../Ui/Iphone15Pro";

interface Reel {
    createdAt: string;
    url: string;

}

const Projects = ({ data }: { data: any }) => {
    useVisitorTracker("/projects", "Projects");

    // const fetchProjectsData = async () => {
    //     const response = await axios.get("api/projects");
    //     return response.data;
    // };

    const [isVideoLoading, setVideoLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc"); // default to descending (newest first)


    const sortReels = (reels: Reel[], order: "asc" | "desc"): Reel[] => {
        return reels.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return order === "desc" ? dateB - dateA : dateA - dateB;
        });
    };

    const sortedReels = data?.reels ? sortReels([...data.reels], sortOrder) : [];


    return (
        <div className="container mx-auto px-1  py-6">
            <Tabs
                color="secondary"
                size="sm"
                radius="full"
                variant="solid"
                className="font-sharpSansSemiBold flex items-center justify-center pb-2"
            >
                <Tab
                    key={"reels"}
                    title={
                        <div className="flex items-center space-x-2">
                            <VideoIcon />
                            <span>Reels</span>
                        </div>
                    }
                >
                    <div className="mb-4 flex justify-start md:justify-between md:items-center items-start md:flex-row flex-col">
                        <div className="w-full ">
                            <h4
                                style={{
                                    background: "linear-gradient(90deg, #FEFCE1 0%, #30283d 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    width: "fit-content"
                                }}
                                className="text-2xl font-Roustel">Total Reels: <span className="text-3xl font-black">{data?.reels.length}</span></h4>
                        </div>
                        <div className="w-full md:w-[200px] mt-3 md:mt-0">
                            <Select
                                startContent={<BiSort />}
                                size="sm"
                                className="font-sharpSansMedium"
                                // color="primary"
                                variant="underlined"
                                // label="Sort"
                                // labelPlacement="outside"
                                selectedKeys={[sortOrder]}
                                onSelectionChange={(keys) => {
                                    const selectedKey = Array.from(keys)[0] as "asc" | "desc";
                                    setSortOrder(selectedKey);
                                }}
                            >
                                <SelectItem className="font-sharpSansMedium" variant="shadow" color="primary" key="desc" value="desc">Newest to Oldest</SelectItem>
                                <SelectItem className="font-sharpSansMedium" variant="shadow" color="primary" key="asc" value="asc">Oldest to Newest</SelectItem>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {sortedReels.map((rel, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-xl"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="hidden">
                                    <ReactPlayer
                                        url={rel.url}
                                        controls
                                        width="100%"
                                        light
                                        height="300px"
                                    />
                                </div>
                                <div className=" block relative">
                                    <ReactPlayer
                                        url={rel.url}
                                        controls
                                        width="100%"
                                        height="600px"
                                        light
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

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Tab>
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
    );
};

export default Projects;