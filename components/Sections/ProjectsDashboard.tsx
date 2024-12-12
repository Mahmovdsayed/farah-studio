'use client'

import { GalleryIcon } from "@/icons/GalleryIcon";
import { VideoIcon } from "@/icons/VideoIcon";
import { Alert, Button, Card, CardBody, CardFooter, Chip, Divider, Image, Input, Select, SelectItem, Spinner, Tab, Tabs } from "@nextui-org/react";
import { FaFigma } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import AddContent from "@/func/Content";
import { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import GalleryCard from "../Ui/GalleryCard";
import { MdDelete } from "react-icons/md";
import DeleteProject from "../Ui/DeleteProject";
import ReactPlayer from "react-player";

const fetchProjectsData = async () => {
    const response = await axiosInstance.get("/projects");
    return response.data;
};

const ProjectsDashboard = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryFn: fetchProjectsData,
        queryKey: ["projects"],
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoadingVideo, setIsLoading] = useState(true); // State for video loading

    const validationSchema = Yup.object({
        url: Yup.string()
            .required("URL is required")
            .matches(
                /^(https?:\/\/)?(i\.ibb\.co\/[\w\-\/]+\.(png|jpg|jpeg|gif)|((www\.)?youtube\.com\/|youtu\.be\/))/,
                "URL must be a direct image link from i.ibb.co or a video link from YouTube"
            ),
        type: Yup.string().required("type is required")
    })

    let formik = useFormik({
        initialValues: {
            url: "",
            type: ""
        },
        validationSchema,
        onSubmit: async (values: any) => {
            const res = await AddContent(values.url, values.type)
            formik.resetForm();
            queryClient.invalidateQueries(["projects"] as any);
            toast.success(res, {
                duration: 4000,
            });
        }
    });

    return (
        <>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-sharpSansSemiBold">Projects</h2>
                <Button startContent={<IoMdAdd />} color="default" className="font-sharpSansMedium z-50" size="sm" onPress={onOpen} radius="sm">Add New Project</Button>
            </div>
            <div className="flex flex-col items-center justify-center my-6">
                <Tabs
                    color="default"
                    size="sm"
                    radius="sm"
                    variant="solid"
                    className="font-sharpSansSemiBold flex items-center justify-center "
                >
                    <Tab
                        key={"social"}
                        title={
                            <div className="flex items-center space-x-1">
                                <GalleryIcon />
                                <span>Social Media</span>
                                <Chip size="sm" color="success" radius="sm">{data?.social.length}</Chip>
                            </div>
                        }
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data?.social.map((social: any) =>
                                <Card key={social._id}>
                                    <CardBody>
                                        <Image
                                            src={social.url}
                                            alt={social.type}
                                        />
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <DeleteProject id={social._id} />
                                    </CardFooter>
                                </Card>
                            )}
                        </div>
                    </Tab>
                    <Tab
                        key={"reels"}
                        title={
                            <div className="flex items-center space-x-1">
                                <VideoIcon />
                                <span>Reels</span>
                                <Chip size="sm" color="success" radius="sm">{data?.reels.length}</Chip>
                            </div>
                        }
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {data?.reels.map((reel: any) =>
                                <Card key={reel._id}>
                                    {isLoading ? (
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
                                    <CardBody>
                                        <ReactPlayer
                                            url={reel.url}
                                            controls
                                            width="100%"
                                            height="600px"
                                            onReady={() => setIsLoading(false)}
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
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <DeleteProject id={reel._id} />
                                    </CardFooter>
                                </Card>
                            )}
                        </div>
                    </Tab>

                </Tabs>
            </div>

            <Modal placement="center" className="font-sharpSansMedium" isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 font-sharpSansSemiBold text-sm md:text-base">ADD NEW PROJECT</ModalHeader>
                            <ModalBody>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className="w-full">
                                    <Input
                                        variant="underlined"
                                        label="Project URL"
                                        placeholder="Enter Project URL"
                                        className="font-sharpSansMedium"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        id="url"
                                        name="url"
                                        value={formik.values.url}
                                        description={
                                            <>
                                                Allowed images must be from <a href="https://imgbb.com/" target="_blank" className="text-blue-500 underline">imgbb.com</a>,
                                                and reels must be from <a href="https://youtube.com" target="_blank" className="text-blue-500 underline">YouTube</a>.
                                            </>
                                        }
                                        type="text"
                                        isRequired
                                    />
                                    {formik.errors.url && formik.touched.url ? (
                                        <div className="mt-2 font-sharpSansMedium">
                                            <Alert color="warning" title={formik.errors.url} />
                                        </div>
                                    ) : ""}
                                    <Select
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        id="type"
                                        name="type"
                                        onSelectionChange={(value) => formik.setFieldValue("type", value)}
                                        selectedKeys={formik.values.type ? new Set([formik.values.type]) : new Set()}
                                        value={formik.values.type}
                                        isRequired
                                        variant="underlined"
                                        className="font-sharpSansMedium"
                                        label="Select Project Type">
                                        <SelectItem value={"reels"} key={"reels"}>Reels</SelectItem>
                                        <SelectItem value={"social"} key={"social"}>Social Media</SelectItem>
                                        <SelectItem value={"web"} key={"web"}>Website</SelectItem>
                                    </Select>
                                    {formik.errors.type && formik.touched.type ? (
                                        <div className="mt-2 font-sharpSansMedium">
                                            <Alert color="warning" title={formik.errors.type} />
                                        </div>
                                    ) : ""}
                                    <Button
                                        onClick={() => onClose()}
                                        isDisabled={!formik.isValid || !formik.values.url || !formik.values.type || formik.isSubmitting}
                                        className="my-4 font-sharpSansSemiBold bg-[#FEFCE1] text-black hover:bg-[#9747FF] hover:text-white transition-all duration-500 float-end"
                                        type="submit" startContent={<FaCheck />} size="sm" color="primary" >
                                        Add Now
                                    </Button>
                                </form>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectsDashboard;
