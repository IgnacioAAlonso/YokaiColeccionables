import CartContext from "../../context/CartContext";
import React, {useState} from "react";

function CustomCarrito({ children }) {
    const [carrito, setCarrito] = useState([]);
    let nuevoItem = true;

    function addItem(item, quantity) {

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

    function setQuantity(item, quantity){
        item.cantidad = quantity;
    }

    return (
        <CartContext.Provider value={{carrito, setCarrito, addItem, setQuantity, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomCarrito;