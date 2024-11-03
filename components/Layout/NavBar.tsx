'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import ButtonUi from "../Ui/ButtonUi";


const NavBar = () => {
    return <>
        <Navbar className="bg-transparent">
            <NavbarBrand>
                <p className="text-2xl font-medium font-instrument-serif">Farah Studio</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-7" justify="end">
                <NavbarItem>
                    <Link className="text-lg font-medium" color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium" color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium" color="foreground" href="#">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium" color="foreground" href="#">
                        Services
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarItem >
                <ButtonUi text="Get" />
            </NavbarItem>
        </Navbar>
    </>;
};

export default NavBar;