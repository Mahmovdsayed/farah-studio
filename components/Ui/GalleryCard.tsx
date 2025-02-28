'use client'

import { Image } from "@nextui-org/react";
import { Lens } from "./Lens";

interface IProps {
    url: string
}
const GalleryCard = ({ url }: IProps) => {
    return <>
        <div className="relative shadow-sm z-0 w-full bg-custom-gradient p-2 rounded-3xl  flex items-center justify-center">
            <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
            >
                <Image
                    src={url}
                    alt="image_3243"
                    className="size-full object-center object-cover"
                    draggable="false"
                />
            </Lens>

        </div>
    </>;
};

export default GalleryCard;