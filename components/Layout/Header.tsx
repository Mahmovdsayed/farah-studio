'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";
import ButtonUi from "../Ui/ButtonUi";
import { motion } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();
    const menuItemsmain = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Projects',
            link: '/projects'
        },
        {
            text: 'About',
            link: '/about'
        },
    ];
    return <>
        <Navbar onMenuOpenChange={setIsMenuOpen} position="sticky" isBlurred className="bg-transparent py-1">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className=" md:text-xl w-fit font-medium font-sharpSansSemiBold">Farah Studio</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-6 w-full me-8" justify="end">
                {
                    menuItemsmain.map((item, index) =>
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    pathname == item.link ? "secondary" : "foreground"
                                }
                                className={pathname == item.link ? " font-sharpSansBold" : " font-sharpSansMedium"}
                                href={item.link}
                                size="lg"
                            >
                                {item.text}
                            </Link>
                        </NavbarItem>
                    )
                }

            </NavbarContent>
            <NavbarItem >
                <ButtonUi title="Get" />
            </NavbarItem>
            <NavbarMenu className="pt-10 overflow-hidden">
                {
                    menuItemsmain.map((item, index) =>
                        <NavbarItem key={`${item}-${index}`}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 100 }}
                                whileHover={{ scale: 1.05 }}


                            >
                                <Link
                                    color={
                                        pathname == item.link ? "secondary" : "foreground"
                                    }
                                    className="w-full text-4xl uppercase font-sharpSansBold"
                                    href={item.link}
                                    size="lg"
                                >
                                    {item.text}
                                </Link>

                            </motion.div>
                        </NavbarItem>
                    )
                }

            </NavbarMenu>
        </Navbar>
    </>;
};

export default Header;