import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const Item = ({ producto, carrito, setCarrito }) => {
    const { id, title, description, price, stock, pictureUrl } = producto;

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
