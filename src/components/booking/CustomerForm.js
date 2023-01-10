import {
    FormControl,
    Input,
    InputLeftElement, 
    InputGroup,
    Heading,
    Text,
    VStack,
    Box,
    HStack,
    FormLabel,
    Progress
  } from '@chakra-ui/react'

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Formik, Field, Form } from 'formik'

import { useBookingContext, schema } from './BookingContext'
import SubmitButtom from './SubmitButtom'


const CustomerForm = ({handleTabChange}) => {

    const [booking, setBooking] = useBookingContext();

    return (
    <Formik
        initialValues={booking.customer}
        validationSchema={schema.customer}
        onSubmit={(values, actions) => {
          setBooking((prev) => ({
                    ...prev,
                    stage: {...prev.stage, confirm: true},
                    customer: values
                })
            );
            handleTabChange(2); // move to next tab index
        }}
    >
    {(props) => (
    <Form>
        <VStack spacing={"1"} align={"center"} py={"2"}>
            <HStack width={'100%'} spacing={"4"} align={"start"} height={"100px"}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="First Name"/>
                    {/* <FormHelperText>Required</FormHelperText> */}
                </FormControl>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Last Name" />
                </FormControl>
            </HStack>
            <HStack width={'100%'} spacing={"4"} align={"start"} height={"100px"}>
                <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone Number' />
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<EmailIcon color='gray.300' />}
                        />
                        <Input type='email' placeholder='Email Address' />
                    </InputGroup>
                </FormControl>
            </HStack>
        </VStack>
        <SubmitButtom/>
    </Form>
    )}
    </Formik>
    )
}

export default CustomerForm