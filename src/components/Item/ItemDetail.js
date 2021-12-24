import React, { useState } from 'react'
import "./Item.css"
import ItemCount from './ItemCount'

const ItemDetail = ({ item, carrito, setCarrito, type }) => {

    const { id, title, description, price, stock, pictureUrl } = item;

    console.log(carrito)

    const Details = () => {
        return (
            <>
                <div class="contenedor__detalles">
                    <div class="contenedor__detalles-imagen">
                        <img src={pictureUrl} class="contenedor__detalles-imagen-img" alt="Imagen Item" />
                    </div>

                    <div class="contenedor__detalles-item">
                        <h2 class="contenedor__detalles-item-titulo">{title}</h2>
                        <p class="contenedor__detalles-item-precio">${price}</p>

                        <ItemCount stock={stock} initial={1} type="details" producto={item} carrito={carrito} setCarrito={setCarrito} />

                        <h5 class="contenedor__detalles-item-subtitulo">{title}</h5>
                        <p class="contenedor__detalles-item-descripcion">{description}</p>
                    </div>
                </div>
            </>
        )
    }

    const Carrito = () => {
        return (
            <>
                <div class="contenedor__detalles">
                    <div class="contenedor__detalles-imagen">
                        <img src={pictureUrl} class="contenedor__detalles-imagen-img" alt="Imagen Item" />
                    </div>

                    <div class="contenedor__detalles-item">
                        <h2 class="contenedor__detalles-item-titulo">{title}</h2>
                        <p class="contenedor__detalles-item-precio">${price}</p>

                        <ItemCount stock={stock} initial={1} type="carrito" producto={item} carrito={carrito} setCarrito={setCarrito} />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {(type === "carrito") ?
                <Carrito /> :
                <Details />
            }
            {/* <div class="contenedor__detalles">
                <div class="contenedor__detalles-imagen">
                    <img src={pictureUrl} class="contenedor__detalles-imagen-img" alt="Imagen Item" />
                </div>

                <div class="contenedor__detalles-item">
                    <h2 class="contenedor__detalles-item-titulo">{title}</h2>
                    <p class="contenedor__detalles-item-precio">${price}</p>

                    <ItemCount stock={stock} initial={1} type="details" producto={item} carrito={carrito} setCarrito={setCarrito} />

                    <h5 class="contenedor__detalles-item-subtitulo">{title}</h5>
                    <p class="contenedor__detalles-item-descripcion">{description}</p>
                </div>
            </div> */}
        </>
    )
}

export default ItemDetail
