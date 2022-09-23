import React, {useState, useEffect} from 'react';
import { Heading, Spinner } from '@chakra-ui/react';
import  ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../assets/productos";
import customFetch from "../../utils/customFetch";

const ItemDetailContainer = ({greeting}) => {

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
            <div>Item Detail Container</div>
        </>       
    )
}

export default ItemDetailContainer