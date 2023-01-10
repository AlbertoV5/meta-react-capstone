import {
    FormControl,
} from '@chakra-ui/react'

const FormWrapper = ({form, name, children}) => {
    return (
        <FormControl 
            isInvalid={form.errors[name] && form.touched[name]} 
            height={{base:"80px", md:"100px"}} 
            width={{base:"100%", md:"47%"}}
        >
            {children}
        </FormControl>
    )
}

export default FormWrapper