import React from 'react'
import ItemListContainer from '../components/Item/ItemListContainer';

const Colecciones = (carrito, setCarrito) => {
    return (
        <>
            <ItemListContainer carrito={carrito.carrito} setCarrito={carrito.setCarrito} />
        </>
    )
}

export default Colecciones;
