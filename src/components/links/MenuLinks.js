import { HStack, Image, Button, Spacer, Flex, VStack, ButtonGroup } from "@chakra-ui/react";
import { HashLink, NavHashLink } from 'react-router-hash-link';

import Logo from "./Logo"

const NavButton = ({to, id, children}) => {
    return (
        <NavHashLink 
            to={to} 
            id={id}
            // activeClassName="selected"
            // activeStyle={{ color: 'red' }}
        >
            {({ isActive }) => (
                <Button
                    variant={"ghost"} 
                    colorScheme={isActive?'purple':'black'}
                >{children}</Button>
            )}
        </NavHashLink>
    )
}


const LinksLeft = () => {
    return (
        <>
        <Logo></Logo>
        <NavButton to="/#hero-section" id="nav-home">
            Home
        </NavButton>
        <NavHashLink to={"/#about-section"} id={"nav-about"}>
            <Button variant={"ghost"}>About</Button>
        </NavHashLink>
        <NavButton to="/menu#top" id="nav-menu">
            Menu
        </NavButton>
        </>
    )
}

const LinksRight = () => {
    return (
        <>
        <NavButton to="/booking#top" id="nav-booking">
            Booking
        </NavButton>
        <NavButton to="/login#top" id="nav-login">
            Login
        </NavButton>
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