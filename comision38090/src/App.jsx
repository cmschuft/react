import React from "react";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Header/ItemListContainer";

const App = () => {

    const nombreusuario = "Matias";
    const apellidoUsuario = "Schuft";

    return (
        <>
            <NavBar nombre={nombreusuario} id="1" apellido={apellidoUsuario}></NavBar>
            {/* <ItemListContainer texto={greeting}></ItemListContainer> */}
        </>
                    
    )
}

export default App