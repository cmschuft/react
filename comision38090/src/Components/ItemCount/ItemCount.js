import React, {useState} from 'react';

export const ItemCount = ({stock,initial,funcion}) => {

    const [contador, setContador] = useState(initial);   

    const suma = () => {
        setContador(contador + 1);
    }

    const resta = () => {
        setContador(contador - 1);
    }

    const cart = () => {
        funcion();
    }
    
  return (
    <>
    <div>Desafío: Contador con botón - ItemCount</div>
    <h1>{contador}</h1>
    <button onClick={suma}>Añadir Item</button>
    <button onClick={resta}>Quitar Item</button>
    <button onClick={cart}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount;
