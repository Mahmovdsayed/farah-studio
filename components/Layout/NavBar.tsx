'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import ButtonUi from "../Ui/ButtonUi";
import React from "react"
import { useParams, usePathname } from "next/navigation";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();
    const menuItemsmain = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'About',
            link: '/about'
        },
        {
            text: 'Projects',
            link: '/projects'
        },
        {
            text: 'Services',
            link: '/services'
        },
    ];
    return <>
        <Navbar onMenuOpenChange={setIsMenuOpen} position="static" isBordered className="bg-transparent ">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="text-2xl font-medium font-instrument-serif">Farah Studio</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-7" justify="end">
                {
                    menuItemsmain.map((item, index) =>
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    pathname == item.link ? "warning" : "foreground"
                                }
                                className="w-full text-lg font-medium"
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
                <ButtonUi url="https://www.instagram.com/farahcreatesx/" text="Get in touch" />
            </NavbarItem>
            <NavbarMenu className="bg-[#EEEBE1] ">
                {
                    menuItemsmain.map((item, index) =>
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    pathname == item.link ? "warning" : "foreground"
                                }
                                className="w-full text-4xl uppercase font-bold"
                                href={item.link}
                                size="lg"
                            >
                                {item.text}
                            </Link>
                        </NavbarItem>
                    )
                }

            </NavbarMenu>
        </Navbar>
    </>;
};

export default NavBar;