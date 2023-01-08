import SectionBase from "./SectionBase"

import { VStack } from "@chakra-ui/react";


const About = () => {
    return (
        <SectionBase 
        id="about-section"
        backgroundColor={"gray.100"}
    >
        <VStack
            id="highlights-wrapper"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"100%"
            }}
        >
        </VStack>
    </SectionBase>
    )
}
export default About;