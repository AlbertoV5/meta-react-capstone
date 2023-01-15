import { HStack, Image, Button, Spacer, Flex } from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';


const MenuLinks = (props) => {
    return (
        <Flex px={{base: '0.5em', md: '6em'}} spacing={'8'}>
            <Spacer/>
            <HStack spacing={"4"} px={"2"}>
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
                    to="/menu#top"
                    id="nav-menu"
                >
                    <Button variant={"ghost"} >
                        Menu
                    </Button>
                </HashLink>
            </HStack>
            {/* <Spacer/> */}
            <HStack spacing={"4"} px={"2"}>
                <HashLink
                    to="/booking#top"
                    id="nav-booking"
                >
                    <Button variant={"ghost"}>
                        Booking
                    </Button>
                </HashLink>
                {/* <HashLink 
                    to="/order-online#top"
                    id="nav-order-online"
                >
                    <Button variant={"ghost"} >
                        Order Online
                    </Button>
                </HashLink> */}
                <HashLink
                    to="/login#top"
                    id="nav-login"
                >
                    <Button variant={"ghost"} >
                        Login
                    </Button>
                </HashLink>
            </HStack>
            <Spacer/>
        </Flex>
    )
}

export default MenuLinks;