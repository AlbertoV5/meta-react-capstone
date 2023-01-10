import React from 'react'

import { Button, Box } from '@chakra-ui/react'

const SubmitButtom = () => {
  return (
    <Box width={"100%"} align={"center"} paddingTop={"0.5em"}>
        <Button 
            colorScheme={"purple"}
            width={"200px"}
            type={"submit"}
        >
            Continue
        </Button>
    </Box>
  )
}

export default SubmitButtom