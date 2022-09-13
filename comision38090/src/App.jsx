import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {

    const mensaje = "Bienvenido! Estos son nuestros productos!";

    return (
        <ChakraProvider>      
    
            <NavBar />
            <ItemListContainer greeting={mensaje} />
            
        </ChakraProvider>                    
    )
}

export default App;