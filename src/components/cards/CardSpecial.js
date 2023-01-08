import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, HStack, Spacer } from '@chakra-ui/react'

const CardSpecial = ({image, header, price, body, footer}) => {
  return (
    <Card backgroundColor={"Background"} width={{
      base:"100%",
      md:"16em"
    }}>
      <Image 
        src={image}
        borderRadius={"8"}
        borderBottomRadius={"0"}
      ></Image>
      <CardBody>
        <HStack paddingBottom={"1em"}>
          <Heading size={"sm"}>{header}</Heading>
          <Spacer></Spacer>
          <Text size={"md"} color={"orange.500"} >{price}</Text>
        </HStack>
        <Text size={"md"}>{body}</Text>
      </CardBody>
      <CardFooter>
        <Text as="b">
          {footer}
        </Text>
      </CardFooter>
    </Card>
  )
}

export default CardSpecial