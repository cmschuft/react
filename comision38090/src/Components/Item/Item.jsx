import React from 'react'
import { Image, Button, Text, VStack} from '@chakra-ui/react';

const Item = ({products}) => {

  return (
    <VStack>
      <Text> {products.nombre} </Text>
      <Image src={products.image} w="300px" />
      <Text>${products.precio} </Text>
      <Button>Ver Detalle</Button>
    </VStack>
  )
}

export default Item