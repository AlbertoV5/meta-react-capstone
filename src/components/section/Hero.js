import { Container, Heading, Text, Image, Button, HStack, VStack, Wrap, Spacer, Center } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Wrap 
            as="section" 
            id="hero-section"
            spacing={"10"}
            width={{
                base:"70vw",
                md:"70vw"
            }}
        >
            <VStack
                id="hero-header"
                spacing={"10"}
                align='stretch'
                width={{
                    base:"100%",
                    md:"40%"
                }}
            >
                <Heading textAlign={"left"}>Little Lemon</Heading>
                <Heading textAlign={"left"} size="sm">Chicago</Heading>
                <Text textAlign={"justify"}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Button width={"50%"}
                    className="btn btn-primary"
                >Press Me!
                </Button>
            </VStack>
            {/* <Spacer height={"0"}></Spacer> */}
            <VStack
                width={{
                    base:"100%",
                    md:"40%"
                }}
            >
                <Image
                    src="https://www.agardenforthehouse.com/wp-content/uploads/2022/11/lemon-pudding-cakes4-LR-1-of-1.jpg"
                    alt="picture of dessert"
                >
                </Image>
            </VStack>
    </Wrap>
    )
}
export default Hero;