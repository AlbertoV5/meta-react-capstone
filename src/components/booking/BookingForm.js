import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select
  } from '@chakra-ui/react'

import React from 'react'

const BookingForm = () => {
  return (
    // TODO: Formik
    // https://www.coursera.org/learn/principles-of-ux-ui-design/supplement/7slXe/solution-booking-a-table-on-the-little-lemon-website
    <>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </FormControl>
    </>
  )
}

export default BookingForm