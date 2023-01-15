import React from 'react'
import ConfirmedBookingSection from "./booking/ConfirmedBookingSection"
import { BookingProvider } from './booking/BookingContext'


const ConfirmedBookingPage = () => {
  return (
    <BookingProvider>
      <ConfirmedBookingSection></ConfirmedBookingSection>
    </BookingProvider>
  )
}

export default ConfirmedBookingPage