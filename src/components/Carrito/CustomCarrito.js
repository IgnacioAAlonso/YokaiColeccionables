import CartContext from "../../context/CartContext";
import React, { useState } from "react";

function CustomCarrito({ children }) {
    const [carrito, setCarrito] = useState([]);
    let nuevoItem = true;

    function addItem(item, quantity) {
        nuevoItem = true;
        if (item.title != undefined & carrito != undefined) {
            item.cantidad = quantity;

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

    function removeItem(id) {
        const items = carrito.filter(i => i.id !== id)
        setCarrito(items);
    }

    function clear() {
        setCarrito([]);
    }

    function setQuantity(item, quantity) {
        item.cantidad = quantity;
    }

    function getPrecioTotal() {
        let precioTotal = 0;
        (carrito.map((item) => (
            precioTotal += (item.cantidad * item.price)
        )))

        return precioTotal;
    }

    function getCantidadTotal() {
        let cantidadTotal = 0;
        (carrito.map((item) => (
            cantidadTotal += item.cantidad
        )))

        return cantidadTotal;
    }

    return (
        <CartContext.Provider value={{ carrito, setCarrito, addItem, setQuantity, removeItem, clear, getPrecioTotal, getCantidadTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomCarrito;