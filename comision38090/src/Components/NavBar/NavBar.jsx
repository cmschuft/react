import React from "react";
import logo from "../../assets/sparrows.png";
import CartWidget from "../CartWidget/CartWidget";
import { Nav } from "../../Components/Nav/Nav";

const NavBar = ({nombre, apellido, id}) => {

    const categorias = [
                        {id:0, nombre:"Inicio"},
                        {id:1, nombre:"Sobre Nosotros"},
                        {id:2, nombre:"Productos"},
                        {id:3, nombre:"Contacto"}
                        ];

    return (
        <header style={styles.container}>
        <img style={styles.imagen} src={logo} alt="Imagen de un Gorrion"/>
        <h1>Bienvenido {nombre}</h1>

        <Nav categorias={categorias} />

        <CartWidget />
        
        </header>
    )    
}

const styles = {

    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    imagen: {
        width: "10%"
    },
}

export default NavBar