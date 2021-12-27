import React, { useState, useEffect } from 'react'
import "./Item.css"

const ItemCount = ({ stock, initial, type, producto, carrito, setCarrito }) => {
    let [state, setState] = useState(initial);

    
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

    const eventCarrito = new CustomEvent("AgregarAlCarrito")
    const agregarCarrito = () => {
        window.dispatchEvent(eventCarrito);
    }

    const eventCarritoList = new CustomEvent("AgregarAlCarritoList")
    const agregarCarritoList = (evnt) => {
        window.dispatchEvent(eventCarritoList);
        evnt.stopPropagation();
    }  

    const Card = () => {
        return (
            <>
                <div class="contenedor__cantidad">
                    <button class="btn btn-danger botones__item" onClick={restaCarrito}>-</button>
                    <p class="cantidad__item">{state}</p>
                    <button class="btn btn-primary botones__item" onClick={sumaCarrito}>+</button>
                </div>
                <button class="agregar__item" data-bs-toggle="offcanvas" href="#offcanvasRight" onClick={agregarCarritoList}>
                    Agregar al carrito</button>
                <p class="stock__item">Stock Actual: {stock}</p>
            </>
        )
    }

    const Details = () => {
        return (
            <>
                <div class="contenedor__detalles-cantidad">
                    <button class="contenedor__detalles-cantidad-resta" onClick={restaCarrito}>-</button>
                    <p class="contenedor__detalles-cantidad-actual">{state}</p>
                    <button class="contenedor__detalles-cantidad-suma" onClick={sumaCarrito}>+</button>
                </div>
                <button class="contenedor__detalles-btnCarrito" data-bs-toggle="offcanvas" href="#offcanvasRight" onClick={agregarCarrito}>
                    Agregar al carrito
                </button>
            </>
        )
    }

    const Carrito = () => {
        return (
            <>
                <div class="contenedor__cantidad">
                    <button class="btn btn-danger botones__item" onClick={restaCarrito}>-</button>
                    <p class="cantidad__item">{state}</p>
                    <button class="btn btn-primary botones__item" onClick={sumaCarrito}>+</button>
                </div>
            </>
        )
    }

    return (
        <>
            {/*             {(type === "card") ?
                <Card /> :
                <Details />
            } */}
            {(() => {
                switch (type) {
                    case "card": return <Card />;
                    case "details": return <Details />;
                    case "carrito": return <Carrito />;
                    default: return <Details />;
                }
            })()}
        </>
    )
}

export default ItemCount
