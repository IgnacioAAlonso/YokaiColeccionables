import React, { useState } from 'react'
import ItemCount from './ItemCount'

const Item = ({ producto }) => {
    const { id, title, description, price, stock, pictureUrl } = producto;
    /* const { id, nombre } = producto; */

    return (
        <div class="card card_item" style={{ width: '18rem' }}>
            <img src={pictureUrl} class="card-img-top imagen_item" alt="Catalogo" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <ItemCount stock={stock} initial={1} />
            </div>
        </div>
    )
}

export default Item
