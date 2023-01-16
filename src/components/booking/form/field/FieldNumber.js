import {
    FormLabel,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'
import FormWrapper from './FormWrapper'

const FieldNumber = ({name, label, min, max, children}) => {
    // https://stackoverflow.com/questions/67187550/formik-chakra-ui-input-number-dont-work
    return (
        <Field name={name}>
            {({field, form}) => (
                <FormWrapper form={form} name={name}>
                    <FormLabel htmlFor={name}>{label}</FormLabel>
                        <NumberInput 
                            min={min}
                            max={max}
                            id={name}
                            {...field}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        >
                            <NumberInputField {...field}/>
                            <NumberInputStepper>
                                <NumberIncrementStepper id={"increment-step"} />
                                <NumberDecrementStepper id={"decrement-step"} />
                            </NumberInputStepper>
                        </NumberInput>
                    <FormErrorMessage display={"block"} textAlign={"right"}>{form.errors[name]}</FormErrorMessage>
                </FormWrapper>
            )}
        </Field>
    )
}

export default FieldNumber