import {
    FormControl,
    Input,
    InputLeftElement, 
    InputGroup,
    Heading,
    Text,
    VStack,
    Box,
    HStack,
    FormLabel,
    Progress
  } from '@chakra-ui/react'

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'


const CustomerForm = ({handleTabChange}) => {
  return (
    <VStack align={"center"} spacing={"4"}>
        <HStack width={'100%'}>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name"/>
                {/* <FormHelperText>Required</FormHelperText> */}
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" />
            </FormControl>
        </HStack>
        <HStack width={'100%'}>
            <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Phone Number' />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='gray.300' />}
                    />
                    <Input type='email' placeholder='Email Address' />
                {/* <FormHelperText>Required</FormHelperText> */}
                </InputGroup>
            </FormControl>
        </HStack>
    </VStack>
  )
}

export default CustomerForm