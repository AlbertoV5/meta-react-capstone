import ButtonOnlineMenu from "../buttons/ButtonOnlineMenu";

import CardSpecial from "../cards/CardSpecial";

import { HStack } from "@chakra-ui/react";

const Highlights = () => {
    return (
        <section 
        id="highlights-section"
        >
            <div
            id="highlights-wrapper"
            className="container-sm"
            style={{width:"80vw"}}
            >
                <section 
                id="highlights-row-1"
                className="row p-4"
                >
                    <HStack>
                        <header 
                        id="highlights-header"
                        className="col-12 col-lg-6 p-2"
                        >
                            <h2>Specials</h2>
                        </header>
                        <div
                        id="highlights-button"
                        className="col-12 col-lg-6 p-2"
                        >
                            <ButtonOnlineMenu/>
                        </div>
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
                </section>
            </div>
        </section>
    )
}
export default Highlights;