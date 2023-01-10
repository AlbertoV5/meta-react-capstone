import { Heading, HStack, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'

import SectionBase from '../section/SectionBase'
import BookingForm from "./BookingForm"


const BookTable = () => {
  return (
    <SectionBase id="book-table">
        <VStack
            id="book-header"
            spacing={"4"}
            align={"stretch"}
            width={{
                base:"100%",
                md:"40%"
            }}
            py={"10"}
        >
            <Heading>Little Lemon</Heading>
            <Heading size='sm'>Chicago</Heading>
            <Text>Find a table for any ocassion</Text>
            <HStack>
                <Image></Image>
                <Image></Image>
            </HStack>
            <BookingForm></BookingForm>
        </VStack>
    </SectionBase>
  )
}

export default BookTable