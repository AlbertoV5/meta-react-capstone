import React from 'react'

import { VStack } from '@chakra-ui/react'

const FormCol = ({children}) => {
  return (
    <VStack align={"center"} py={"2"} spacing={"4"}>
        {children}
    </VStack>
  )
}

export default FormCol