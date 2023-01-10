import React from 'react'
import FormRow from './layout/FormRow'
import FormCol from './layout/FormCol'
import {
    Text,
    Box,
    Spacer,
    Wrap,
    HStack,
    Heading
} from '@chakra-ui/react'
import SubmitButtom from './SubmitButtom'
import { useBookingContext, schema, completeSchema } from '../BookingContext'
import { Formik, Form } from 'formik'


const ConfirmForm = () => {
    const [booking, setBooking] = useBookingContext();

    const tableHeaders = [
        "Date", "Time", "Guests", "Ocassion"
    ]
    const customerHeaders = [
        "First Name", "Last Name", "Cellphone", "Email"
    ]
    const handleRequest = () => {
        console.log(booking);
    }
    return (
    <Formik
        initialValues={booking}
        onSubmit={handleRequest}
    >
        {(props) => (
        <Form>
            <FormCol>
                <FormRow>
                {
                    Object.entries(booking.table).map(([key, value], i) => (
                        <Box width={{base:"46%", md:"23%"}} key={key}>
                            <Text as="b" key={`head-${key}`}>{tableHeaders[i]}</Text>
                            <Text key={`text-${key}`} lineHeight={"1.8"}>{value}</Text>
                        </Box>
                    ))
                }
                </FormRow>
                <FormRow>
                {
                    Object.entries(booking.customer).map(([key, value], i) => (
                        <Box width={{base:"46%", md:"23%"}} key={key}>
                            <Text as="b" key={`head-${key}`}>{customerHeaders[i]}</Text>
                            <Text key={`text-${key}`} lineHeight={"1.8"}>{value}</Text>
                        </Box>
                    ))
                }
                </FormRow>
                <FormRow>
                    <Box width={{base:"100%", md:"100%"}}>
                        <Text as="b">Comments</Text>
                        <Text>{booking.details.comments}</Text>
                    </Box>
                </FormRow>
                <Spacer></Spacer>
            </FormCol>
            <SubmitButtom>
                Submit
            </SubmitButtom>
        </Form>
        )}
    </Formik>
    )
}

export default ConfirmForm