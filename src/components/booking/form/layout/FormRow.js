import React from 'react'

import { Wrap } from '@chakra-ui/react'

const FormRow = ({width, children}) => {
  return (
    <Wrap width={
        width ? width : '100%'
      } 
      spacing={"2"}
      px={"1"}
      align={"start"}
      paddingBottom={"2"}
    >
        {children}
    </Wrap>
  )
}

export default FormRow