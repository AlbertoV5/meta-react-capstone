import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Select,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
    HStack,
    VStack,
  } from '@chakra-ui/react'

import React from 'react'
import { useBookingContext, bookingTableSchema } from './BookingContext'
import { Formik, useFormik } from 'formik'

import FormErrorHandler from "./FormErrorHandler"

const BookingForm = () => {
    const [booking, setBooking] = useBookingContext();

    const formik = useFormik({
        initialValues: booking.table,
        onSubmit: (values) => {
            setBooking((prev) => values)
            console.log(booking);
        },
        onChange: (values) => {
            setBooking((prev) => values)
        },
        validationSchema: bookingTableSchema,
    });

    return (
        // TODO: Formik
        // https://www.coursera.org/learn/principles-of-ux-ui-design/supplement/7slXe/solution-booking-a-table-on-the-little-lemon-website
    <form onSubmit={formik.handleSubmit}>
        <VStack spacing={"4"} align={"center"}>
            <HStack width={'100%'} spacing={"4"}>
                <FormControl isInvalid={formik.errors.date != undefined}>
                    <FormLabel>Date</FormLabel>
                    <Input
                        type="date" 
                        id={"date"}
                        name={"date"}
                        {...formik.getFieldProps('date')}
                        // defaultValue={formik.values.date}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        // checked={formik.checked}
                    ></Input>
                    <FormErrorHandler error={formik.errors.date} text={"Required"}/>
                </FormControl>
                <FormControl isInvalid={formik.errors.time != undefined}>
                    <FormLabel>Time</FormLabel>
                    <Input 
                        type="time"
                        id={"time"}
                        name={"time"}
                        {...formik.getFieldProps('time')}
                        // defaultValue={formik.values.time}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        // checked={formik.checked}
                    ></Input>
                    <FormErrorHandler error={formik.errors.time} text={"Required"}/>
                </FormControl>
            </HStack>
            <HStack width={'100%'}>
                <FormControl isInvalid={formik.errors.guests != undefined}>
                    <FormLabel>Number of Guests</FormLabel>
                    <NumberInput
                        max={12} 
                        min={0}
                        // id={"guests"}
                        // name={"guests"}
                        // {...formik.getFieldProps('guests')}
                        onChange={(e) => console.log(e)}
                        // defaultValue={formik.values.guests}
                        // onChange={formik.handleChange}
                        // onChange={(e) => console.log(e)}
                        // onBlur={formik.handleBlur}
                    >
                        <NumberInputField 
                            name={"guests"} 
                            id={"guests"}
                            {...formik.getFieldProps('guests')}
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorHandler error={formik.errors.guests} text={"Required"}/>
                </FormControl>
                <FormControl isInvalid={formik.errors.ocassion != undefined}>
                    <FormLabel>Ocassion</FormLabel>
                    <Select placeholder='Select' defaultValue={booking.table.ocassion}>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                        <option value='Other'>Other</option>
                    </Select>
                    <FormErrorHandler error={formik.errors.ocassion} text={"Required"}/>
                </FormControl>
            </HStack>
            <Box width={"100%"} align={"center"} paddingTop={"1em"}>
                <Button 
                    colorScheme={"yellow"} 
                    width={"200px"}
                    disabled
                >Continue</Button>
            </Box>
        </VStack>
    </form>
    )
}

export default BookingForm