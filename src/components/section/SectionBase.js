import React from 'react'
import { Box, Wrap } from '@chakra-ui/react'

const SectionBase = ({children, id, backgroundColor}) => {
  return (
    <Box 
      as="section" 
      id={id}
      width={"100vw"}
      px={"15vw"}
      backgroundColor={backgroundColor?backgroundColor:"Background"}
    >
      <Wrap
        spacing={"5"}
        width={{
            base:"70vw",
            md:"70vw"
        }}
        align={"center"}
        py={"3em"}
      >
              {children}
      </Wrap>
    </Box>
  )
}

export default SectionBase