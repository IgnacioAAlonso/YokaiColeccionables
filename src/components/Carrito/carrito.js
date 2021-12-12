import React from "react";

const Carrito = () => {
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
                <div class="offcanvas-body"></div>
            </div>
        </div>
    );
};

export default Carrito;
