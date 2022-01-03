import React, { useState, useEffect, useContext } from "react";
import { NavLink as Link } from 'react-router-dom';
import ItemDetail from "../Item/ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";
import "./Carrito.css"

const Carrito = () => {
    const value = useContext(CartContext);
    const productos = useContext(CartContext).carrito;
    const clear = useContext(CartContext).clear;

    const clearAll = () => {
        clear();
    }

    return (
        <div>
            <a class="carritoContenedor" data-bs-toggle="offcanvas" href="#offcanvasRight" role="button">
                <div>
                    <i class="carritoContenedor_icono icon fas fa-shopping-cart"></i>
                </div>
            </a>

            <div
                class="offcanvas offcanvas-end offcanvasBackground"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Carrito de Compras</h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">

                    {(productos.length == 0) ?
                        (<p> El carrito está vacio </p>) :
                        (productos.map((producto) => (
                            <ItemDetail item={producto} type="carrito" />
                        )))
                    }

                    <div class="offcanvas-checkOut">
                        <Link to={{
                            pathname: `/cart`
                        }}>
                            <button class="offcanvas-checkOutButton" data-bs-dismiss="offcanvas"> Finalizar Compra </button>
                        </Link>
                        <button class="offcanvas-checkOutButton" data-bs-dismiss="offcanvas" onClick={() => { clearAll(); }}> Borrar todo </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;
