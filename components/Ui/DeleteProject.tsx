'use client'

import { deleteContent } from "@/func/Content";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

interface IProps {
    id: string
}
const DeleteProject = ({ id }: IProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const queryClient = useQueryClient();

    return <>
        <Button
            onClick={onOpen}
            startContent={<MdDelete />} className="w-full font-semibold mt-3" color="danger" radius="sm">
            Delete
        </Button>
        <Modal placement="center" className="font-sharpSansMedium" isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-sharpSansSemiBold text-sm md:text-base">Delete Project</ModalHeader>
                        <ModalBody>
                            <div className="text-start">
                                <p className="text-lg font-medium text-red-500">
                                    Are you sure you want to delete this project?
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    This action cannot be undone and the project will be permanently removed.
                                </p>

                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                size="sm"
                                radius="sm"
                                color="default"
                                onClick={onClose}
                                className="font-sharpSansSemiBold"
                            >
                                Cancel
                            </Button>
                            <Button
                                size="sm"
                                radius="sm"
                                color="danger"
                                onClick={() => {
                                    deleteContent(id);
                                    queryClient.invalidateQueries(["projects"] as any);

                                    onClose();
                                    toast.success("Project has been deleted successfully!", {
                                        duration: 4000
                                    });
                                }}
                                className="font-sharpSansSemiBold"
                            >
                                Confirm Delete
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal >
    </>;
};

export default DeleteProject;