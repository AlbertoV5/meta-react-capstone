import {Link} from "react-router-dom";

import { HStack, Image, Button, ButtonGroup } from "@chakra-ui/react";


const MenuLinks = (props) => {
    return (
        <HStack spacing={"4"} width={"100%"} justify={"center"}>
            <Image
                src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
            />
            <Link
            to="/"
            >
                <Button variant={"ghost"} >
                    Home
                </Button>
            </Link>
            <a
                href="#about-section"
            >
                <Button variant={"ghost"} >
                    About
                </Button>
            </a>
            <Link
            to="/menu"
            >
                <Button variant={"ghost"} >
                    Menu
                </Button>
            </Link>
            <Link
            to="/reservations"
            >
                <Button variant={"ghost"} >
                    Reservations
                </Button>
            </Link>
            <Link 
            to="/order-online"
            >
                <Button variant={"ghost"} >
                    Order Online
                </Button>

            </Link>
            <Link
            to="/login"
            >
                <Button variant={"ghost"} >
                    Login
                </Button>
            </Link>
        </HStack>
    )
}

export default MenuLinks;