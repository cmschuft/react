import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {

    const nombreusuario = "Matias";
    const apellidoUsuario = "Schuft";
    const mensaje = "Texto para el desafio";

    return (
        <>
            <NavBar nombre={nombreusuario} id="1" apellido={apellidoUsuario}></NavBar>
            <ItemListContainer greeting={mensaje} />
        </>
                    
    )
}

export default App