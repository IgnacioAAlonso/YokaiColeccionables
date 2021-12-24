import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ carrito, setCarrito }) => {

    const [producto, setProducto] = useState([]);
    const location = useLocation();
    const prod = location.state;

    useEffect(() => {
        getItem.then((res) => { setProducto(res) })
    }, [])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod.producto)
        }, 2000)
    })

    return (
        <div>
            <ItemDetail item={producto} carrito={carrito} setCarrito={setCarrito} />
        </div>
    )
}

export default ItemDetailContainer
