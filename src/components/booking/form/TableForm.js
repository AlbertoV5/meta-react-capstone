import React from 'react'
import { useBookingContext, schema } from '../BookingContext'
import { Formik, Form } from 'formik'
import SubmitButtom from './SubmitButtom'

import FieldInput from './field/FieldInput'
import FieldNumber from "./field/FieldNumber"
import FieldSelect from "./field/FieldSelect"

import FormRow from "./layout/FormRow"
import FormCol from './layout/FormCol'


const TableForm = ({handleTabChange}) => {
    const [booking, setBooking] = useBookingContext();
    
    return (
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
            <FormCol>
                <FormRow>
                    <FieldInput type={"date"} name={"date"} label={"Date"}/>
                    <FieldInput type={"time"} name={"time"} label={"Time"}/>
                </FormRow>
                <FormRow>
                    <FieldNumber name={"guests"} min={0} max={12} label={"Number of Guests"}/>
                    <FieldSelect name={"ocassion"} label={"Ocassion"} placeholder={"Select"}>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                        <option value='Other'>Other</option>
                    </FieldSelect>
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

export default TableForm