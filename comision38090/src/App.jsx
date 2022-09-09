import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

const App = () => {

    const nombreusuario = "Matias";
    const apellidoUsuario = "Schuft";
    const mensaje = "Texto para el desafio";

    const unaFuncion = () => {
        alert("Producto Agregado");
    }

    return (
        <>
            <NavBar nombre={nombreusuario} id="1" apellido={apellidoUsuario}></NavBar>
            <ItemListContainer greeting={mensaje} />
            <ItemCount stock={10} initial={1} funcion={unaFuncion}/>
        </>
                    
    )
}

export default App