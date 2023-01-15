import React from 'react'

import { Image } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

const Logo = () => {
  return (
    <HashLink to="/#top">
        <Image style={{maxWidth:"100px"}} src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"/>
    </HashLink>
  )
}

export default Logo