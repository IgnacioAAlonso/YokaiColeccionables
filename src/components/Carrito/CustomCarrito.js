import CartContext from "../../context/CartContext";
import React, {useState} from "react";

function CustomCarrito({ children }) {
    let arr = [1,2]

    function addItem(value) {
        arr.push(value)
    }

    function checkItem(params) {
        return arr
    }

    return (
        <CartContext.Provider value={{addItem, checkItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomCarrito;