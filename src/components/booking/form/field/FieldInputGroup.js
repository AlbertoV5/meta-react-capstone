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

const FieldInputGroup = ({type, name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel>{label}</FormLabel>
                <InputGroup>
                    {children}
                    <Input type={type} {...field} placeholder={placeholder?placeholder:label} />
                </InputGroup>
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
        )}
    </Field>
  )
}

export default FieldInputGroup