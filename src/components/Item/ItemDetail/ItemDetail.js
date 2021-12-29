import React, { useState, useEffect, useContext} from 'react'
import "../Item.css"
import ItemCount from '../ItemCount'
import CartContext from '../../../context/CartContext';

/* function useAddCarrito(eventType, handler) {  
    useEffect(() => {
    
        window.addEventListener(eventType, handler);
        return () => {
            window.removeEventListener(eventType, handler);
        }
}, [handler])
} */

const ItemDetail = ({ item, type }) => {

    const { id, title, description, price, stock, cantidad, pictureUrl } = item;
    let [state, setState] = useState(1);
    const carrito = useContext(CartContext).carrito;
    
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

                        <ItemCount stock={stock} type="details" producto={item} state={state} setState={setState} />

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
                <div class="contenedor__detallesCarrito">
                    <div class="contenedor__detalles-imagen">
                        <img src={pictureUrl} class="contenedor__detalles-imagen-imgCarrito" alt="Imagen Item" />
                    </div>

                    <div class="contenedor__detalles-item">
                        <h2 class="contenedor__detalles-item-tituloCarrito">{title}</h2>
                        <p class="contenedor__detalles-item-precioCarrito">${price}</p>

                        <ItemCount stock={stock} type="carrito" producto={item} carrito={carrito} state={cantidad} setState={setState} />
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
