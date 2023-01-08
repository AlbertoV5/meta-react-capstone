import MenuLinks from "./MenuLinks"

import { Container, HStack, Image } from "@chakra-ui/react";


const Nav = () => {
    return (
        <Container
            as="nav"
            maxW={"100vw"}
            backgroundColor={"Background"}
            position={"fixed"}
            height={"4.5em"}
            zIndex={100}
        >
            <MenuLinks/>
        </Container>
    )
}
export default Nav;