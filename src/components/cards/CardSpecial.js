import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text } from '@chakra-ui/react'

const CardSpecial = ({image, header, body, footer}) => {
  return (
    <Card>
      <Image src={image}></Image>
      <CardBody>
        <Heading size={"md"}>{header}</Heading>
        <Text size={"md"}>{body}</Text>
      </CardBody>
      <CardFooter>
        {footer}
      </CardFooter>
    </Card>
  )
}

export default CardSpecial