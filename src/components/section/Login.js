import { Heading, Text, Button, HStack, VStack, 
    Spacer, Card, CardHeader, CardBody, Divider,
    FormControl, FormLabel, Input, FormHelperText, 
} from "@chakra-ui/react";
import SectionBase from "./SectionBase"


const Login = () => {
    return (
    <SectionBase 
        id="login-section"
    >
        <HStack width={{
            base:"100vw",
            md:"100vw"
        }}>
            <Spacer/>
            <VStack
                id="login-form"
                spacing={"4"}
                align={"stretch"}
                width={{
                    base:"100%",
                    md:"70%"
                }}
                py={"4"}
                justify={"center"}
            >
                <Card variant={"outline"}>
                    <CardHeader width={"100%"} align={"center"}>
                        <Text fontSize={"sm"} color={"gray"} py={"2"}>
                            Login is not currently available (no functionality)
                        </Text>
                        <Heading>User Login</Heading>
                        <Text paddingTop={"0.5em"}>Little Lemon</Text>
                    </CardHeader>
                    <CardBody paddingBottom={"8"}>
                        <HStack>
                            <Spacer></Spacer>
                            <VStack spacing={"4"} width={{
                                base:"80%", md:"60%"
                            }}>
                                <Divider/>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input type='email' />
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' />
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <HStack>
                                    <Button colorScheme={"purple"}>Login</Button>
                                    <Button colorScheme={"gray"}>Register</Button>
                                </HStack>
                            </VStack>
                            <Spacer></Spacer>
                        </HStack>
                    </CardBody>
                </Card>
            </VStack>
            <Spacer/>
        </HStack>
    </SectionBase>
    )
}
export default Login;