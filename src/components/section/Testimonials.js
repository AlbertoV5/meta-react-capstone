import SectionBase from "./SectionBase"
import CardTestimonial from "../cards/CardTestimonial";

import { Heading, HStack, VStack, Wrap, Spacer } from "@chakra-ui/react";


const Testimonials = () => {
    return (
    <SectionBase 
        id="testimonials-section"
        backgroundColor={"gray.800"}
    >
        <VStack
            id="testimonials-wrapper"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"100%"
            }}
        >
            <Heading 
                width={"100%"} 
                textAlign="center"
                color={"Background"}
                paddingBottom={"1.5em"}
                paddingTop={"1em"}
            >
                Testimonials
            </Heading>
            <Wrap spacingX={"2"} spacingY={"4"} paddingBottom={"3em"} width={"100%"}>
                <CardTestimonial
                    heading={"Lorem"}
                    name={"Ipsum"}
                    text={"Lorem ipsum dolor sit amet."}
                    image={"https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg"}
                />
                <Spacer></Spacer>
                <CardTestimonial
                    heading={"Lorem"}
                    name={"Ipsum"}
                    text={"Lorem ipsum dolor sit amet."}
                    image={"https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg"}
                />
                <Spacer></Spacer>
                <CardTestimonial
                    heading={"Lorem"}
                    name={"Ipsum"}
                    text={"Lorem ipsum dolor sit amet."}
                    image={"https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg"}
                />
                <Spacer></Spacer>
                <CardTestimonial
                    heading={"Lorem"}
                    name={"Ipsum"}
                    text={"Lorem ipsum dolor sit amet."}
                    image={"https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg"}
                />
                <Spacer></Spacer>
            </Wrap>
        </VStack>
    </SectionBase>
    )
}
export default Testimonials;