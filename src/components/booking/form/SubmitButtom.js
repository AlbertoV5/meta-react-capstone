import React from 'react'

import { Button, Box } from '@chakra-ui/react'

const SubmitButtom = ({id, children}) => {
  return (
    <Box width={"100%"} align={"center"} paddingTop={"0.5em"}>
        <Button 
            id={id}
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