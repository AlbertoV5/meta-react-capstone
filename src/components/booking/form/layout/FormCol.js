import React from 'react'

import { VStack } from '@chakra-ui/react'

const FormCol = ({children}) => {
  return (
    <VStack spacing={"1"} align={"center"} py={"2"}>
        {children}
    </VStack>
  )
}

export default FormCol