import React, { useState } from 'react'
import "./Item.css"

const ItemCount = ({ stock, initial }) => {
    const STOCK = stock;

    let [state, setState] = useState(initial);

    const sumaCarrito = () => {
        if (STOCK > state) {
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
            <div class="contenedor__cantidad">
                <button class="btn btn-danger botones__item" onClick={restaCarrito}>-</button>
                <p class="cantidad__item">{state}</p>
                <button class="btn btn-primary botones__item" onClick={sumaCarrito}>+</button>
            </div>
            <button class="agregar__item" data-bs-toggle="offcanvas" href="#offcanvasRight">Agregar al carrito</button>
            <p class="stock__item">Stock Actual: {STOCK}</p>
        </>
    )
}

export default ItemCount
