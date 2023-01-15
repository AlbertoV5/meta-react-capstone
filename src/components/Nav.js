import { Container, useBreakpointValue, useDisclosure, IconButton, HStack } from "@chakra-ui/react";
import { FiMenu } from 'react-icons/fi'

import MenuLinks from "./links/MenuLinks"
import MenuDrawer from "./links/MenuDrawer";
import Logo from "./links/Logo"


const Nav = () => {
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container
            as="nav"
            height={{
                base:"4.5em",
                md:"4.5em"
            }}
            width="100vw"
            maxW="100vw"
            bg="bg-surface" 
            boxShadow={"sm"}
            style={{
                position: "fixed"
            }}
            backgroundColor={"chakra-body-bg"}
            zIndex={"100"}
        >
        {
            isDesktop
            ? <MenuLinks/>
            : <HStack px={"2em"} justify={"space-between"}>
                <Logo></Logo>
                <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                    onClick={onOpen}
                />
            </HStack>
        }
        <MenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </Container>
    )
}
export default Nav;