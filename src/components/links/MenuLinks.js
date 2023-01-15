import { Link } from "react-router-dom";

import { HStack, Image, Button } from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';


const MenuLinks = (props) => {
    return (
        <HStack spacing={"4"} width={"100%"} justify={"center"}>
            <HashLink to="/#top">
                <Image
                    src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
                />
            </HashLink>
            <HashLink
                to="/#hero-section"
                id="nav-home"
            >
                <Button variant={"ghost"} >
                    Home
                </Button>
            </HashLink>
            <HashLink to="/#about-section">
                <Button variant={"ghost"}>
                    About
                </Button>
            </HashLink>
            <HashLink
                to="/booking#top"
                id="nav-booking"
            >
                <Button variant={"ghost"}>
                    Booking</Button>
            </HashLink>
            <HashLink
                to="/menu#top"
                id="nav-menu"
            >
                <Button variant={"ghost"} >
                    Menu
                </Button>
            </HashLink>
            <HashLink 
                to="/order-online#top"
                id="nav-order-online"
            >
                <Button variant={"ghost"} >
                    Order Online
                </Button>
            </HashLink>
            <Link
                to="/login#top"
                id="nav-login"
            >
                <Button variant={"ghost"} >
                    Login
                </Button>
            </Link>
        </HStack>
    )
}

export default MenuLinks;