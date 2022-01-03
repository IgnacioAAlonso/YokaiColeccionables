import React, { useState, useEffect, useContext } from 'react'
import "./Item.css"
import CartContext from '../../context/CartContext'

const ItemCount = ({ stock, type, producto, state, setState }) => {

    const setCarrito = useContext(CartContext).addItem;
    const setQuantity = useContext(CartContext).setQuantity;
    const removeItem = useContext(CartContext).removeItem;

    const sumaCarrito = () => {
        if (stock > state) {
            setState(++state);
            setQuantity(producto, state);
        }
    }

    const restaCarrito = () => {
        if (state > 1) {
            setState(--state);
            setQuantity(producto, state);
        }
    }

    const deleteItem = (id) => {
        removeItem(id);
    }

    const Card = () => {
        return (
            <>
                <div class="contenedor__cantidad">
                    <button class="btn btn-danger botones__item" onClick={restaCarrito}>-</button>
                    <p class="cantidad__item">{state}</p>
                    <button class="btn btn-primary botones__item" onClick={sumaCarrito}>+</button>
                </div>
                <button class="agregar__item" data-bs-toggle="offcanvas" href="#offcanvasRight"
                    onClick={() => { setCarrito(producto, state); }}>
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
                <button class="contenedor__detalles-btnCarrito" data-bs-toggle="offcanvas" href="#offcanvasRight"
                    onClick={() => { setCarrito(producto, state); }}>
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
                <button class="" onClick={() => { deleteItem(producto.id) }}>Eliminar</button>
            </>
        )
    }

    return (
        <>
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
