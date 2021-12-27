import React, { useState, useEffect } from 'react'
import { NavLink as Link } from 'react-router-dom';
import ItemCount from './ItemCount'


function useEventLi(eventType, handler) {
    
    useEffect(() => {
        window.addEventListener(eventType, handler);
        return () => {
            window.removeEventListener(eventType, handler);
        }
    }, [])
}

const Item = ({ producto, carrito, setCarrito }) => {
    const { id, title, description, price, stock, pictureUrl } = producto;
    let nuevoItem = true;

/*     const carritoList = () => {
        console.log("Probando carritoList");
        window.removeEventListener('AgregarAlCarritoList', carritoList);
        if (producto.title != undefined & carrito != undefined) {
                for (let i = 0; i < carrito.length; i++) {
                    if (carrito[i].id == producto.id) {
                        nuevoItem = false;
                    }
                }
            
                if (nuevoItem == true) {
                    setCarrito([...carrito, producto]);
                }
            }
       
    }

    window.addEventListener('AgregarAlCarritoList', carritoList);

     */
    let itemPrueba;
    useEventLi('AgregarAlCarritoList',
        () => {
        console.log("Probando carritoList: ");

    })

    return (
        <div class="card card_item" style={{ width: '18rem' }}>
            <Link to={{
                pathname: `/item/${id}`
            }}
                state={{ producto }}
            >
                <img src={pictureUrl} class="card-img-top imagen_item" alt="Catalogo" />
            </Link>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <ItemCount stock={stock} initial={1} type="card" producto={producto} carrito={carrito} setCarrito={setCarrito} />
            </div>
        </div >
    )
}

export default Item
