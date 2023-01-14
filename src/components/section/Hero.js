import { Heading, Text, Image, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import SectionBase from "./SectionBase"


const Hero = () => {
    return (
    <SectionBase 
        id="hero-section"
        backgroundColor={"gray.200"}
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
            <Heading textAlign={"left"} size="2xl">Little Lemon</Heading>
            <Heading textAlign={"left"} size="md" as="h4">Chicago</Heading>
            <Text textAlign={"left"}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>
            <Spacer py={"0.5em"}></Spacer>
            <Button width={"200px"} colorScheme={"yellow"} color={"black"} size="md">
                Reserve a Table
            </Button>
        </VStack>
        <Spacer height={"0"}></Spacer>
        <HStack
            width={{
                base:"100%",
                md:"45%"
            }}
        >
            <Image
                src="https://www.agardenforthehouse.com/wp-content/uploads/2022/11/lemon-pudding-cakes4-LR-1-of-1.jpg"
                alt="picture of dessert"
            >
            </Image>
        </HStack>
    </SectionBase>
    )
}
export default Hero;