import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
} from "./NavbarElements";
import Logo from "../../images/logo-transparente.png";
import Carrito from "../Carrito/Carrito";

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
                        Nosotros
                    </NavLink>
                </NavMenu>

                <NavLink to="/">
                    <img class="imagen_logo" src={Logo} alt="Logo" />
                </NavLink>

                <NavBtn>
                    {/* <a class="carritoContenedor" data-bs-toggle="offcanvas" href="#offcanvasRight" role="button">
                        <div>
                            <i class="icon fas fa-shopping-cart"></i>
                        </div>
                    </a> */}
                    <Carrito />
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
