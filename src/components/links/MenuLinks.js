import { Link } from "react-router-dom";

import { HStack, Image, Button } from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';


const MenuLinks = (props) => {
    return (
        <HStack spacing={"4"} width={"100%"} justify={"center"}>
            <Link to="/">
                <Image
                    src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
                />
            </Link>
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
            <Link
                to="/booking"
                id="nav-booking"
            >
                <Button variant={"ghost"} >
                    Booking
                </Button>
            </Link>
            <Link
            to="/menu"
            id="nav-menu"
            >
                <Button variant={"ghost"} >
                    Menu
                </Button>
            </Link>
            <Link 
            to="/order-online"
            id="nav-order-online"
            >
                <Button variant={"ghost"} >
                    Order Online
                </Button>
            </Link>
            <Link
            to="/login"
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