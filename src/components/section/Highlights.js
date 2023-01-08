import ButtonOnlineMenu from "../buttons/ButtonOnlineMenu";

import CardSpecial from "../cards/CardSpecial";

import { HStack, VStack, Heading, Text, Button } from "@chakra-ui/react";

import SectionBase from "./SectionBase"


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
                >
                    <Heading size={"lg"} width={"80%"}>
                       Specials
                    </Heading>
                    <Button width={"20%"} colorScheme={"yellow"} color={"black"} size="md">
                        Online Menu
                    </Button>
                </HStack>
                <HStack>
                    <CardSpecial
                        header={"Greek Salad"}
                        body={"Try our greek salad."}
                        footer={"Order a delivery"}
                    >
                    </CardSpecial>
                    <CardSpecial>
                    </CardSpecial>
                    <CardSpecial>
                    </CardSpecial>
                </HStack>
            </VStack>
        </SectionBase>
    )
}
export default Highlights;