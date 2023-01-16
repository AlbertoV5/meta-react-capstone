import React from 'react'
import { Card, CardBody, CardFooter, Image, Heading, Text, HStack, Spacer } from '@chakra-ui/react'

const CardSpecial = ({image, header, price, body, footer}) => {
  return (
    <Card 
      backgroundColor={"Background"} 
      width={{
        base:"100%",
        md:"16em"
      }}
      _hover={{transform:"translate(-4px, -4px)", boxShadow:"5px 10px #cccccc"}}
      onClick={() => console.log("hi")}
      cursor={"pointer"}
    >
      <Image 
        src={image}
        borderRadius={"8"}
        borderBottomRadius={"0"}
        alt={"Image of Delicious Food"}
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