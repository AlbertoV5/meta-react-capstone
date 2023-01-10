import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

import FormWrapper from './FormWrapper'

const FieldInputGroup = ({type, name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
            <FormWrapper form={form} name={name}>
                <FormLabel>{label}</FormLabel>
                <InputGroup>
                    {children}
                    <Input type={type} {...field} placeholder={placeholder?placeholder:label} />
                </InputGroup>
                <FormErrorMessage display={"block"} textAlign={"right"}>{form.errors[name]}</FormErrorMessage>
            </FormWrapper>
        )}
    </Field>
  )
}

export default FieldInputGroup