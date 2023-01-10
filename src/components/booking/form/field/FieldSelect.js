import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

const FieldSelect = ({name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel>{label}</FormLabel>
            <Select {...field} placeholder={placeholder}>
                {children}
            </Select>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
        )}
    </Field>
  )
}

export default FieldSelect