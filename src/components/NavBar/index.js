import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
} from "./NavbarElements";
import Logo from "../../images/logo-transparente.png";
import Carrito from "../Carrito/carrito";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Inicio
                    </NavLink>
                    <NavLink to="/colecciones" activeStyle>
                        Colecciones
                    </NavLink>
                    <NavLink to="/contacto" activeStyle>
                        Contacto
                    </NavLink>
                    <NavLink to="/nostros" activeStyle>
                        Nostros
                    </NavLink>
                </NavMenu>

                <NavLink to="/">
                    <img class="imagen_logo" src={Logo} alt="Logo" />
                </NavLink>

                <NavBtn>
                    <Carrito />
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
