import React from 'react'
import OrderOnline from './section/OrderOnline'

import { VStack } from '@chakra-ui/react'

const OrderOnlinePage = () => {
  return (
    <VStack spacing={"0"}>
      <OrderOnline></OrderOnline>
    </VStack>
  )
}

export default OrderOnlinePage