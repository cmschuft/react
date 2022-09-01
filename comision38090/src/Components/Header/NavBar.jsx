import React from "react";
import logo from "../../assets/sparrows.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"


const Header = () => {
    return (
        <header>
        <img src={logo} alt="Imagen de un Gorrion"/>
        <h1>Tienda Calafate</h1>
        <nav>
            <a href="">Inicio</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Productos</a>
            <a href="">Contacto</a>
        </nav>
        <ShoppingCartIcon />
        </header>
    )    
}

export default Header