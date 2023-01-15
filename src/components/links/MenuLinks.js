import { HStack, Image, Button, Spacer, Flex, VStack } from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';

import Logo from "./Logo"

const LinksLeft = () => {
    return (
        <>
        <Logo></Logo>
        <HashLink to="/#hero-section" id="nav-home">
            <Button variant={"ghost"}>Home</Button>
        </HashLink>
        <HashLink to="/#about-section">
            <Button variant={"ghost"}>
                About
            </Button>
        </HashLink>
        <HashLink to="/menu#top" id="nav-menu">
            <Button variant={"ghost"}>Menu</Button>
        </HashLink>
        </>
    )
}

const LinksRight = () => {
    return (
        <>
        <HashLink to="/booking#top" id="nav-booking">
            <Button variant={"ghost"}>Booking</Button>
        </HashLink>
        <HashLink to="/login#top" id="nav-login">
            <Button variant={"ghost"}>Login</Button>
        </HashLink>
        </>
    )
}


const MenuLinks = ({isVertical}) => {
    if (isVertical)
        return (
            <VStack spacing={"4"} py={"4"}>
                <LinksLeft/>
                <LinksRight/>
            </VStack>
        )

    return (
        <Flex px={{base: '0.5em', md: '6em'}} id="menu-wrapper">
            <Spacer/>
            <HStack spacing={"4"} px={"2"}>
                <LinksLeft/>
            </HStack>
            <HStack spacing={"4"} px={"2"}>
                <LinksRight/>
            </HStack>
            <Spacer/>
        </Flex>
    )
}

export default MenuLinks;