import React from 'react'
import { useBookingContext, schema } from '../BookingContext'
import { Formik, Form } from 'formik'
import SubmitButtom from './SubmitButtom'

import FieldTextArea from "./field/FieldTextArea"

import FormRow from "./layout/FormRow"
import FormCol from './layout/FormCol'


const DetailsForm = ({handleTabChange}) => {
    const [booking, setBooking] = useBookingContext();
    
    return (
    <Formik
        initialValues={booking.details}
        validationSchema={schema.details}
        onSubmit={(values, actions) => {
            setBooking((prev) => ({
                    ...prev,
                    stage: {...prev.stage, confirm: true},
                    details: values
                })
            );
            handleTabChange(3); // move to next tab index
        }}
    >
    {(props) => (
        <Form>
            <FormCol>
                <FormRow>
                    <FieldTextArea
                        name={"comments"} 
                        label={"Comments"}
                        placeholder={"Include any additional comments here."}
                        helper={"Optional"}
                    ></FieldTextArea>
                </FormRow>
                <FormRow>
                </FormRow>
            </FormCol>
            <SubmitButtom>
                Continue
            </SubmitButtom>
        </Form>
    )}
    </Formik>
    )
}

export default DetailsForm