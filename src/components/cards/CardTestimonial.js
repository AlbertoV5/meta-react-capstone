import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, HStack, Spacer, VStack } from '@chakra-ui/react'


const CardTestimonial = ({heading, name, text, image}) => {
  return (
    <Card
        backgroundColor={"Background"} 
        width={{
            base:"42%",
            md:"13em"
        }}
        p={"2"}
        borderRadius={"0"}
    >
        <CardBody>
            <VStack width={"100%"} align={"stretch"}>
                <Heading size="md">{heading}</Heading>
                <HStack>
                    <Image 
                        src={image}
                        width={"50%"}
                    ></Image>
                    <Heading size="sm">{name}</Heading>
                </HStack>
                <Text>{text}</Text>
            </VStack>
        </CardBody>
    </Card>
  )
}

export default CardTestimonial