import React, { useReducer } from 'react'
import { useBookingContext, schema } from '../BookingContext'
import { Formik, Form } from 'formik'
import SubmitButtom from './SubmitButtom'

import FieldInput from './field/FieldInput'
import FieldNumber from "./field/FieldNumber"
import FieldSelect from "./field/FieldSelect"

import FormRow from "./layout/FormRow"
import FormCol from './layout/FormCol'
import { Spacer, useBreakpointValue } from '@chakra-ui/react'


const availableTimes = (state, action) => {
    if (action.date == 'Monday') return {avail: ["12:00", "14:00", "15:00", "17:00"]};
}

const TableForm = ({handleTabChange}) => {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    const [booking, setBooking] = useBookingContext();
    const [state, dispatch] = useReducer(availableTimes, {avail: []});
    
    // TODO:
    // use state.avail to map all the options for available times form
    // this means changing the current time input to a custom option
    // the dispatch will carry the date 
    // onChange={(value) => dispatch({date: value})}
    // so that the reducer availableTimes function sets avail array based on the date
    
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
                    <Spacer></Spacer>
                    <FieldInput type={"time"} name={"time"} label={"Time"}/>
                    {isDesktop?null:<Spacer></Spacer>}
                    <FieldNumber name={"guests"} min={0} max={12} label={"Number of Guests"}/>
                    <Spacer></Spacer>
                    <FieldSelect name={"ocassion"} label={"Ocassion"} placeholder={"Select"}>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                        <option value='Other'>Other</option>
                    </FieldSelect>
                    {isDesktop?null:<Spacer></Spacer>}
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