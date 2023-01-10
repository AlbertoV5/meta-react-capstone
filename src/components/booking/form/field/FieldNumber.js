import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
    Input,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

const FieldNumber = ({name, label, min, max, children}) => {
    // https://stackoverflow.com/questions/67187550/formik-chakra-ui-input-number-dont-work
    return (
        <Field name={name}>
            {({field, form}) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
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
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

export default FieldNumber