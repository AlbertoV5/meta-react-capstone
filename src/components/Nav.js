import MenuLinks from "./MenuLinks"

import { Container, HStack, Image } from "@chakra-ui/react";


const Nav = () => {
    return (
        <Container
            as="nav"
            maxW={"100vw"}
            backgroundColor={"Background"}
            position={"fixed"}
        >
            <MenuLinks/>
        </Container>
    )
}
export default Nav;