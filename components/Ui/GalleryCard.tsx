'use client'

import { Image } from "@nextui-org/react";

interface IProps {
    url: string
}
const GalleryCard = ({ url }: IProps) => {
    return <>
        <div className="relative shadow-sm  w-full bg-custom-gradient p-2 rounded-3xl  flex items-center justify-center">
            <Image
                src={url}
                alt="image_3243"
                className="size-full object-center object-cover"
            />
        </div>
    </>;
};

export default GalleryCard;