import React from 'react'
import { useBookingContext, schema } from '../BookingContext'
import { Formik, Field, Form } from 'formik'
import SubmitButtom from './SubmitButtom'

import FieldInput from './field/FieldInput'
import FieldNumber from "./field/FieldNumber"
import FieldSelect from "./field/FieldSelect"

import FormRow from "./layout/FormRow"
import FormCol from './layout/FormCol'


const DetailsForm = ({handleTabChange}) => {
    const [booking, setBooking] = useBookingContext();
    
    return (
    <Formik
        initialValues={booking.table}
        validationSchema={schema.table}
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