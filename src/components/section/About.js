import SectionBase from "./SectionBase"

import { HStack, VStack, Heading, Text, Box, Spacer, Image, Wrap } from "@chakra-ui/react";


const About = () => {
    return (
    <SectionBase 
        id="about-section"
        backgroundColor={"gray.100"}
    >
        <Wrap
            id="about-wrapper"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"100%"
            }}
        >
            <Box 
                textAlign={"left"} 
                justify={"left"}
                width={{
                    base:"100%",
                    md:"45%"
                }}
            >
                <Heading size="2xl">Little Lemon</Heading>
                <br></br>
                <Heading size="md" textAlign={"left"}>Chicago</Heading>
                <br></br>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis.
                </Text>
            </Box>
            <Spacer></Spacer>
            <HStack
                width={{
                    base:"100%",
                    md:"45%"
                }}
                p={"4"}
            >
                <Image
                    width={"50%"}
                    transform={"translate(-40px, 40px)"}
                    boxShadow={"10px 10px #33333333"}
                    src={"https://sallysbakingaddiction.com/wp-content/uploads/2017/07/creamy-lemon-pie-3.jpg"}
                ></Image>
                <Image
                    width={"50%"}
                    transform={"translate(-80px, -40px)"}
                    boxShadow={"10px 10px #33333333"}
                    src={"https://sallysbakingaddiction.com/wp-content/uploads/2017/07/creamy-lemon-pie-3.jpg"}
                ></Image>
            </HStack>
        </Wrap>
    </SectionBase>
    )
}
export default About;