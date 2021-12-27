import React, { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import "./Item.css"
import ItemCount from './ItemCount'
import CartContext from '../../context/CartContext';

function useAddCarrito(eventType, handler) {  
    useEffect(() => {

        window.addEventListener(eventType, handler);
        return () => {
            window.removeEventListener(eventType, handler);
        }
    }, [handler])
}

const ItemDetail = ({ item, type }) => {

    const { id, title, description, price, stock, pictureUrl } = item;
    let nuevoItem = true;
    const carrito = useContext(CartContext).carrito;
    const setCarrito = useContext(CartContext).setCarrito;
    
    useAddCarrito('AgregarAlCarrito', ()=>{

        if (item.title != undefined & carrito != undefined) {

                for (let i = 0; i < carrito.length; i++) {
                    if (carrito[i].id == item.id) {
                        nuevoItem = false;
                    }
                }
            
                if (nuevoItem == true) {
                    setCarrito([...carrito, item]);
                }
            }
        
        }

    )
    

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

                        <ItemCount stock={stock} initial={1} type="details" producto={item} carrito={carrito}  />

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

                        <ItemCount stock={stock} initial={1} type="carrito" producto={item} carrito={carrito}  />
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
        </>
    )
}

export default ItemDetail
