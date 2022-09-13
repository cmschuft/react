import { Text, Button, HStack } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';

export const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial);   

    const suma = () => {
        setContador(contador + 1);
    }

    const resta = () => {
        setContador(contador - 1);
    }

    const cart = () => {
        onAdd();
    }
    
  return (
    <HStack>
      <div>Desafío: Contador con botón - ItemCount</div>
      <Text>{contador}</Text>
      <Button colorScheme="green" onClick={suma}>Añadir Item</Button>
      <Button colorScheme="red" onClick={resta}>Quitar Item</Button>
      <Button colorScheme="yellow" onClick={cart}>Agregar al Carrito</Button>
    </HStack>
  )
}

export default ItemCount;
