import React, {useState, useEffect} from 'react';
import { Heading, Spinner } from '@chakra-ui/react';
import  ItemList from "../ItemList/ItemList";
import { products } from "../../assets/productos";
import customFetch from "../../utils/customFetch";

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)})
    }, [])

    return (
        <>
            <Heading>{greeting}</Heading>
            {Loading ? <Spinner /> : <ItemList listProducts={listProducts} /> }
        </>       
    )
}

export default ItemListContainer