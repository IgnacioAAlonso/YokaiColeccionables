import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item'

const ItemList = ({ productosTotales }) => {

    const [productos, setProductos] = useState([]);

    const { id } = useParams();

    const filtered = productos.filter(function (element) {
        if (id === undefined) {
            return element;
        }
    });
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const API = new Promise((resolve, reject) => {
            setTimeout(() => {
                setProductos(productosTotales)
                setCategory(productosTotales)
                resolve(true)
            }, 2000)
        })
    }, [])

    useEffect(() => {
        API.then((res) => { setCategory(res) })
    }, [id])

    const API = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(function (element) {
                if (id === undefined) {
                    return element;
                } else {
                    return element.category === id;
                }
            }))
        }, 1000)
    })

    return (
        <>
            {category.map((producto) => (
                <Item producto={producto} />
            ))}
        </>
    )

}

export default ItemList
