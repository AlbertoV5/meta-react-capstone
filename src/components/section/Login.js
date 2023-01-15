import { Heading, Text, Image, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import SectionBase from "./SectionBase"


const Login = () => {
    return (
    <SectionBase 
        id="login-section"
    >
        <VStack
            id="hero-header"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"40%"
            }}
            py={"10"}
        >
            <Heading>User Login</Heading>
            <Text>Hi</Text>
        </VStack>
    </SectionBase>
    )
}
export default Login;