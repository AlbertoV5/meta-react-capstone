import SectionBase from "./SectionBase"

import { VStack } from "@chakra-ui/react";


const Testimonials = () => {
    return (
    <SectionBase 
        id="testimonials-section"
        backgroundColor={"gray.600"}
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
export default Testimonials;