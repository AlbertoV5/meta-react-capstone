import React, { useReducer } from 'react'
import { useBookingContext, schema } from '../BookingContext'
import { Formik, Form } from 'formik'
import SubmitButtom from './SubmitButtom'

import FieldInput from './field/FieldInput'
import FieldNumber from "./field/FieldNumber"
import FieldSelect from "./field/FieldSelect"
import FieldInputCallback from "./field/FieldInputCallback"

import FormRow from "./layout/FormRow"
import FormCol from './layout/FormCol'
import { Spacer, useBreakpointValue } from '@chakra-ui/react'

const times = [
    "09:30",
    "10:00",
    "12:30",
    "14:00", 
    "14:30",
    "15:00",
    "17:00",
    "17:30",
]
const timesB = [
    "09:00",
    "10:00",
    "10:30",
    "11:00",
    "11:30"
]

const availableTimes = (state, action) => {
    if (action.date == '2023-01-17') 
        return {avail: times}
    else if (action.date == 'Tuesday')
        return {avail: times}
    else
        return {avail: times}
}

const TableForm = ({handleTabChange}) => {

    const isDesktop = useBreakpointValue({ base: false, md: true });
    const [booking, setBooking] = useBookingContext();
    const [state, dispatch] = useReducer(availableTimes, {avail: timesB});
   
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
                    <FieldInputCallback 
                        type={"date"} name={"date"} label={"Date"}
                        callback={(e) => dispatch({date: e.target.value})}
                    />
                    <Spacer></Spacer>
                    {/* <FieldInput type={"time"} name={"time"} label={"Time"}/> */}
                    <FieldSelect name={"time"} label={"Time"} placeholder={"Select"}>
                        {state.avail.map((time) => (
                            <option id={`time-${time.replace(":","")}`} key={time} value={time}>{time}</option>
                        ))}
                    </FieldSelect>
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
            <SubmitButtom id={"table-submit"}>
                Continue
            </SubmitButtom>
        </Form>
    )}
    </Formik>
    )
}

export default TableForm