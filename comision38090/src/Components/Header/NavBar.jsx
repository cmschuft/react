import React from "react";
import logo from "../../assets/sparrows.png"
import { CartWidget } from "./CartWidget";
import { Nav } from "./Nav/Nav";
import "./Header.css"


const Header = ({nombre, apellido, id}) => {

    const categorias = [{id:0, nombre:"Inicio"},
                        {id:1, nombre:"Sobre Nosotros"},
                        {id:2, nombre:"Productos"},
                        {id:3, nombre:"Contacto"}];

    return (
        <header>
        <img src={logo} alt="Imagen de un Gorrion"/>
        <h1>Bienvenido {nombre}</h1>

        <Nav categorias={categorias} />

        <CartWidget />
        
        </header>
    )    
}

export default Header