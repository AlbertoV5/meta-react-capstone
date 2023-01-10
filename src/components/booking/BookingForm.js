import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
    HStack,
    Divider,
    Button,
    InputLeftElement, 
    InputGroup,
    Heading,
    Text,
  } from '@chakra-ui/react'

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import React from 'react'



const BookingForm = () => {
  return (
    // TODO: Formik
    // https://www.coursera.org/learn/principles-of-ux-ui-design/supplement/7slXe/solution-booking-a-table-on-the-little-lemon-website
    <>
        <HStack>
            <FormControl>
            <FormLabel>Date</FormLabel>
                <Input type="date"></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Time</FormLabel>
                <Input type="time"></Input>
            </FormControl>
        </HStack>
        <HStack>
            <FormControl>
            <FormLabel>Number of Diners</FormLabel>
                <NumberInput defaultValue={2} max={12} min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
            <FormControl>
                <FormLabel>Seating Area</FormLabel>
                <Select placeholder='Select'>
                    <option value='inside'>Inside</option>
                    <option value='outside'>Outside</option>
                </Select>
            </FormControl>
        </HStack>
        <Button>Continue</Button>
        <Divider></Divider>
        <Heading>Customer Info</Heading>
        <FormControl>
            <Input type="text" placeholder="First Name"/>
            {/* <FormHelperText>Required</FormHelperText> */}
        </FormControl>
        <FormControl>
            <Input type="text" placeholder="Last Name" />
        </FormControl>
        <FormControl>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<PhoneIcon color='gray.300' />}
                />
                <Input type='tel' placeholder='Phone Number' />
            </InputGroup>
        </FormControl>
        <FormControl>
            <InputGroup>
            {/* <FormLabel>Email address</FormLabel> */}
            <InputLeftElement
                    pointerEvents='none'
                    children={<EmailIcon color='gray.300' />}
            />
            <Input type='email' placeholder='Email Address' />
            {/* <FormHelperText>Required</FormHelperText> */}
            </InputGroup>
        </FormControl>
    </>
  )
}

export default BookingForm