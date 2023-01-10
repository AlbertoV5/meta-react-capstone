import React from 'react'

import { Button, Box } from '@chakra-ui/react'

const SubmitButtom = ({children}) => {
  return (
    <Box width={"100%"} align={"center"} paddingTop={"0.5em"}>
        <Button 
            colorScheme={"purple"}
            width={"200px"}
            type={"submit"}
        >
            {children}
        </Button>
    </Box>
  )
}

export default SubmitButtom