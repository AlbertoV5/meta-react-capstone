import React, { useEffect, useState } from 'react'
import FormRow from './layout/FormRow'
import FormCol from './layout/FormCol'
import {
    Text,
    Box,
    Spacer,
} from '@chakra-ui/react'
import SubmitButtom from './SubmitButtom'
import { useBookingContext } from '../BookingContext'
import { Formik, Form } from 'formik'
import { submitAPI } from './api'
import { useNavigate } from "react-router-dom";


const ConfirmForm = () => {
    const [booking, setBooking] = useBookingContext();
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (submitted){
            localStorage.setItem("booking", JSON.stringify(booking)) // store in browser
            navigate("/confirmed-booking") // route
        }
    }, [submitted, booking, navigate])
    
    const tableHeaders = ["Date", "Time", "Guests", "Ocassion"]
    const customerHeaders = ["First Name", "Last Name", "Cellphone", "Email"]
    return (
    <Formik
        initialValues={booking}
        onSubmit={() => {
            submitAPI(booking)
            setSubmitted(() => true)
        }}
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