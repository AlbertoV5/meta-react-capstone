import CardSpecial from "../cards/CardSpecial";

import { HStack, VStack, Heading, Text, Button, Wrap } from "@chakra-ui/react";

import SectionBase from "./SectionBase"
import { Link } from "react-router-dom";


const Highlights = () => {
    return (
        <SectionBase 
            id="highlights-section"
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
                <HStack
                    align={"stretch"}
                    paddingBottom={"2em"}
                >
                    <Heading size={"xl"} width={"80%"}>
                       Specials
                    </Heading>
                    <Link to="/menu">
                        <Button colorScheme={"yellow"} color={"black"} size="md">
                            Online Menu
                        </Button>
                    </Link>
                </HStack>
                <Wrap spacing={"10"}>
                    <CardSpecial
                        header={"Greek Salad"}
                        price={"$10.00"}
                        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis."}
                        footer={"Order a delivery"}
                        image={"https://www.bowlofdelicious.com/wp-content/uploads/2020/07/Greek-Salad-square.jpg"}
                    />
                    <CardSpecial
                        header={"Bruchetta"}
                        price={"$7.00"}
                        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis."}
                        footer={"Order a delivery"}
                        image={"https://www.shugarysweets.com/wp-content/uploads/2019/06/bruschetta-recipe.jpg"}
                    />
                    <CardSpecial
                        header={"Lemon Dessert"}
                        price={"$5.50"}
                        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis."}
                        footer={"Order a delivery"}
                        image={"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Lemon-Pudding-Dessert_EXPS_THAM17_12018_D11_10_2b.jpg"}
                    />
                </Wrap>
            </VStack>
        </SectionBase>
    )
}
export default Highlights;