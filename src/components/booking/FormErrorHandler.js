import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
    HStack,
    VStack,
  } from '@chakra-ui/react'

const FormErrorHandler = ({error, text}) => {
  return (
    <>
    {
        error?
        <FormErrorMessage>{error}</FormErrorMessage>
        :
        <FormHelperText>{text}</FormHelperText>
    }
    </>
  )
}

export default FormErrorHandler