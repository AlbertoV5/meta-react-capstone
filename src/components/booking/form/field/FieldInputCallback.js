import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Text
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

import FormWrapper from './FormWrapper'

const FieldInputCallback = ({type, name, label, placeholder, callback, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
          <FormWrapper form={form} name={name}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Input type={type} {...field} onChange={(e) => {
                field.onChange(e);
                callback(e);
              }} id={name} placeholder={placeholder?placeholder:label}></Input>
              <FormErrorMessage display={"block"} textAlign={"right"}>
                  {form.errors[name]}
              </FormErrorMessage>
          </FormWrapper>
        )}
    </Field>
  )
}

export default FieldInputCallback