import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({ productosTotales }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const API = new Promise((resolve, reject) => {
            setTimeout(() => {
                setProductos(productosTotales)
                resolve(true)
            }, 2000)
        })
    }, [])

    return (
        <>
            {productos.map((producto) => (
                <Item producto={producto} />
            ))}
        </>
    )

}

export default ItemList
