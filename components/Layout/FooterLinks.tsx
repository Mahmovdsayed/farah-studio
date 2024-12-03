'use client'
import React from "react";
import { FloatingDock } from "@/components/Ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconBrandBehance,
    IconTerminal2,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Image } from "@nextui-org/react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Whatsapp",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://wa.me/+201068487314",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/farahcreatesx/",
        },

        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.facebook.com/profile.php?id=100012199628339",
        },
        {
            title: "Behance",
            icon: (
                <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.behance.net/farahmohamed52",
        },
    ];
    return (
        <div className="flex items-center justify-center  w-full">
            <FloatingDock
                // mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
