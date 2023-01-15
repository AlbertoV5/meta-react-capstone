import { Text, VStack, Heading } from '@chakra-ui/react'
import React from 'react'
import SectionBase from './SectionBase'

const OrderOnline = () => {
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
            <Heading>Under Construction</Heading>
            <Text>Order Online</Text>
        </VStack>
    </SectionBase>
  )
}

export default OrderOnline