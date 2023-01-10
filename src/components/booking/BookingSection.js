import { Heading, HStack, Text, VStack, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

import SectionBase from '../section/SectionBase'
import BookingForm from "./BookingForm"


const BookingSection = () => {
  return (
    <SectionBase id="booking-section">
        <HStack width={{
            base:"100vw",
            md:"100vw"
        }}>
            <Spacer></Spacer>
            <VStack
                id="booking-header"
                spacing={"4"}
                align={"stretch"}
                width={{
                    base:"100%",
                    md:"70%"
                }}
                py={"10"}
                justify={"center"}
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
            <Spacer></Spacer>
        </HStack>
    </SectionBase>
  )
}

export default BookingSection