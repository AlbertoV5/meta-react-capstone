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
import { useBookingContext, schema } from './BookingContext'
import { Formik, Field, Form } from 'formik'


const BookingForm = ({handleTabChange}) => {
    const [booking, setBooking] = useBookingContext();
    
    return (
    // https://www.coursera.org/learn/principles-of-ux-ui-design/supplement/7slXe/solution-booking-a-table-on-the-little-lemon-website
    <Formik
        initialValues={booking.table}
        validationSchema={schema.table}
        onSubmit={(values, actions) => {
          setBooking((prev) => ({
                    ...prev,
                    stage: {...prev.stage, customer: true},
                    table: values
                })
            );
            handleTabChange(1); // move to next tab index
        }}
      >
    {(props) => (
    <Form>
        <VStack spacing={"1"} align={"center"} py={"4"}>
            <HStack width={'100%'} spacing={"4"} align={"start"} height={"100px"}>
                <Field name='date'>
                    {({field, form}) => (
                        <FormControl isInvalid={form.errors.date && form.touched.date}>
                            <FormLabel>Date</FormLabel>
                            <Input type="date" {...field}></Input>
                            <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name="time">
                    {({field, form}) => (
                    <FormControl isInvalid={form.errors.time && form.touched.time}>
                        <FormLabel>Time</FormLabel>
                        <Input type="time" {...field}></Input>
                        <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                    </FormControl>
                    )}
                </Field>
            </HStack>
            <HStack width={'100%'} spacing={"4"} align={"start"} height={"100px"}>
                <Field name='guests'>
                    {({field, form}) => (
                        <FormControl isInvalid={form.errors.guests && form.touched.guests}>
                            <FormLabel htmlFor='guests'>Number of Guests</FormLabel>
                            <NumberInput // https://stackoverflow.com/questions/67187550/formik-chakra-ui-input-number-dont-work
                                min={0}
                                max={12}
                                id='guests'
                                {...field}
                                onChange={(val) =>
                                    form.setFieldValue(field.name, val)
                                }
                            >
                                <NumberInputField {...field}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <FormErrorMessage>{form.errors.guests}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name='ocassion'>
                    {({field, form}) => (
                        <FormControl isInvalid={form.errors.ocassion && form.touched.ocassion}>
                            <FormLabel>Ocassion</FormLabel>
                            <Select {...field} placeholder={"Select"}>
                                <option value='Birthday'>Birthday</option>
                                <option value='Anniversary'>Anniversary</option>
                                <option value='Other'>Other</option>
                            </Select>
                            <FormErrorMessage>{form.errors.ocassion}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
            </HStack>
        </VStack>
        <Box width={"100%"} align={"center"} >
            <Button 
                colorScheme={"yellow"} 
                width={"200px"}
                type={"submit"}
            >Continue</Button>
        </Box>
    </Form>
    )}
    </Formik>
    )
}

export default BookingForm