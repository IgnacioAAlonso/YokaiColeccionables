import React, { useState } from 'react'
import "./Item.css"

const ItemDetail = ({ item }) => {

    const { id, title, description, price, stock, pictureUrl } = item;

    let [state, setState] = useState(1);

    const sumaCarrito = () => {
        if (stock > state) {
            setState(++state);
        }
    }

    const restaCarrito = () => {
        if (state > 1) {
            setState(--state);
        }
    }

    return (
        <>
            <div class="contenedor__detalles">
                <div class="contenedor__detalles-imagen">
                    <img src={pictureUrl} class="contenedor__detalles-imagen-img" alt="Imagen Item" />
                </div>

                <div class="contenedor__detalles-item">
                    <h2 class="contenedor__detalles-item-titulo">{title}</h2>
                    <p class="contenedor__detalles-item-precio">${price}</p>

                    <div class="contenedor__detalles-cantidad">
                        <button class="contenedor__detalles-cantidad-resta" onClick={restaCarrito}>-</button>
                        <p class="contenedor__detalles-cantidad-actual">{state}</p>
                        <button class="contenedor__detalles-cantidad-suma" onClick={sumaCarrito}>+</button>
                    </div>
                    <button class="contenedor__detalles-btnCarrito" data-bs-toggle="offcanvas" href="#offcanvasRight">
                        Agregar al carrito
                    </button>

                    <h5 class="contenedor__detalles-item-subtitulo">{title}</h5>
                    <p class="contenedor__detalles-item-descripcion">{description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
