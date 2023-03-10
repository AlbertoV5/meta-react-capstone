import About from "./section/About"
import Hero from "./section/Hero"
import Highlights from "./section/Highlights"
import Testimonials from "./section/Testimonials"

import { VStack } from "@chakra-ui/react"

const HomePage = () => {
    return (
        <VStack spacing={"0"}>
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </VStack>
    )
}
export default HomePage;