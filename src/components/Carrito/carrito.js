import React, { useState, useEffect } from "react";
import ItemDetail from "../Item/ItemDetail";

const Carrito = ({ productos }) => {
    return (
        <div>
            <a class="carritoContenedor" data-bs-toggle="offcanvas" href="#offcanvasRight" role="button">
                <div>
                    <i class="carritoContenedor_icono icon fas fa-shopping-cart"></i>
                </div>
            </a>

            <div
                class="offcanvas offcanvas-end"
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
                </div>
            </div>
        </div>
    );
};

export default Carrito;
