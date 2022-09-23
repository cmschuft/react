import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

    const mensaje = "Bienvenido! Estos son nuestros productos!";

    return (
        <ChakraProvider>      
    
            <NavBar />
            <ItemListContainer greeting={mensaje} />
            <ItemDetailContainer />
            
        </ChakraProvider>                    
    )
}

export default App;