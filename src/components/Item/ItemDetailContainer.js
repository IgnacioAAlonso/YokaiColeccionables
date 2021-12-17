import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams();
    console.log(id);
    const [producto, setProducto] = useState([]);

    const location = useLocation();
    const prod = location.state;
    console.log(location.state);

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
            {/* <ItemDetail item={item} /> */}
            {producto.category}
        </div>
    )
}

export default ItemDetailContainer
