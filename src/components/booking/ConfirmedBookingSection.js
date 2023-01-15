import React, { useEffect, useReducer } from 'react'
import SectionBase from '../section/SectionBase';

import { VStack, Spacer, HStack, Text, Heading, Button } from '@chakra-ui/react';
import { bookingDefault } from './BookingContext';

import SubmitButtom from './form/SubmitButtom';
import { useNavigate } from 'react-router-dom';

const ConfirmedBookingSection = () => {
    const [booking, dispatch] = useReducer(() => {}, {}, () => {
      let localBooking = localStorage.getItem("booking");
      return localBooking?JSON.parse(localBooking):bookingDefault
    })
    const navigate = useNavigate();

    useEffect(() => {
      return (
        // clear storage on component exit
        localStorage.setItem("booking", "")
      )
    })

    return (
      <SectionBase id="booking-section">
        <HStack width={{
            base:"100vw",
            md:"100vw"
        }}>
            <VStack
                id="booking-header"
                spacing={"4"}
                align={"stretch"}
                width={{
                    base:"100%",
                    md:"70%"
                }}
                py={"4"}
                justify={"center"}
            >
              <Heading textAlign={"left"} size="2xl">Little Lemon</Heading>
              <Heading textAlign={"left"} size="md">Chicago</Heading>
              <Text fontSize={"lg"} py={"0.5em"}>
              Thank you <b>{booking.customer.firstName}!</b>
              <br></br>
              Your made a reservation at <b>{booking.table.time}</b> on <b>{booking.table.date}</b>.
              <br></br>
              Here is your confirmation number: <b>{booking.table.date.replaceAll("-", "")}{booking.table.time.replace(":", "")}</b>
              </Text>
              <Button colorScheme={"purple"} width={"200px"}
              onClick={() => (navigate("/"))}>
                Home
              </Button>
            </VStack>
        </HStack>
      </SectionBase>
    )
}

export default ConfirmedBookingSection