import React from 'react'
import Item from "../Item/Item"

const ItemList = ({ listProducts }) => {

  return (
    <>
      {listProducts.map((prod, i) => <Item key={`${prod.nombre}-${i}`} products={prod}/>)}
    </>
  )
}

export default ItemList