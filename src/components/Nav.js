import MenuLinks from "./links/MenuLinks"

import { Container } from "@chakra-ui/react";


const Nav = () => {
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
            <MenuLinks/>
        </Container>
    )
}
export default Nav;