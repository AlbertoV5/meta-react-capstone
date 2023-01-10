import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

const FieldInput = ({type, name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel>{label}</FormLabel>
                <Input type={type} {...field} placeholder={placeholder?placeholder:label}></Input>
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
        )}
    </Field>
  )
}

export default FieldInput