import React from 'react'
import FormRow from './layout/FormRow'
import FormCol from './layout/FormCol'
import {
    Text,
    Box,
    Spacer,
    Wrap,
    HStack
} from '@chakra-ui/react'
import SubmitButtom from './SubmitButtom'
import { useBookingContext, schema, completeSchema } from '../BookingContext'
import { Formik, Form } from 'formik'


const ConfirmForm = () => {
    const [booking, setBooking] = useBookingContext();

    return (
    <Formik
        initialValues={{table:booking.table, customer:booking.customer, details:booking.details}}
        onSubmit={(values, actions) => {
            console.log(values)
        }}
    >
        {(props) => (
        <Form>
            <FormCol>
                <Wrap 
                    width={"100%"}
                    align={"stretch"}
                >
                    <FormRow 
                        width={{
                            base:"100%",
                            md: "40%"
                        }}>
                        <Box fontWeight={600} width={"30%"}>
                            {["Date", "Time", "Guests", "Ocassion"].map((item) =>
                                <Text key={item}>{item}</Text>
                            )}
                        </Box>
                        <Box width={"60%"}>
                            {Object.entries(booking.table).map(([key, value]) =>
                                <Text key={key} textAlign={"right"} overflow={"scroll"}>{value}</Text>
                            )}
                        </Box>
                    </FormRow>
                    <Spacer></Spacer>
                    <FormRow width={{
                        base:"100%",
                        md: "48%"
                    }}>
                        <Box fontWeight={600} width={"30%"}>
                            {["First Name", "Last Name", "Phone", "Email"].map((item) =>
                                <Text key={item}>{item}</Text>
                            )}
                        </Box>
                        <Box width={"60%"}>
                            {Object.entries(booking.customer).map(([key, value]) =>
                                <Text key={key} textAlign={"right"}>{value}</Text>
                            )}
                        </Box>
                    </FormRow>
                    <FormRow width={{
                        base:"100%",
                        md: "48%"
                    }}>
                    <Box fontWeight={600} width={{
                        base:"100%",
                        md: "40%"
                    }}>
                        <Text>Comments</Text>
                    </Box>
                    <Box width={{
                        base:"100%",
                        md: "50%"
                    }}>
                        <Text textAlign={"left"}>{booking.details.comments}</Text>
                    </Box>
                    </FormRow>
                </Wrap>
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