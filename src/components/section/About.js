import SectionBase from "./SectionBase"

import { HStack, VStack, Heading, Text, Spacer, Image } from "@chakra-ui/react";


const About = () => {
    return (
    <SectionBase 
        id="about-section"
        backgroundColor={"gray.100"}
    >
        <VStack
            id="about-wrapper"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"40%"
            }}
            py={"10"}
            paddingBottom={{base:"10", md:"20"}}
        >
            <Heading textAlign={"left"} size="2xl">Little Lemon</Heading>
            <Heading textAlign={"left"} size="md" as="h4">Chicago</Heading>
            <Text textAlign={"left"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>
        </VStack>
        <Spacer></Spacer>
        <HStack
            width={{
                base:"100%",
                md:"42%"
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
                src={"https://www.kyleecooks.com/wp-content/uploads/2019/03/Mini-Lemon-Meringue-Pies-28.jpg"}
            ></Image>
        </HStack>
        <Spacer></Spacer>
    </SectionBase>
    )
}
export default About;