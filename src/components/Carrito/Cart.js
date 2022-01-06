import React, { useState, useContext, useEffect } from "react";
import { NavLink as Link } from 'react-router-dom';
import ItemDetail from "../Item/ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";


function useAddCarrito(eventType, handler) {
    useEffect(() => {

        window.addEventListener(eventType, handler);
        return () => {
            window.removeEventListener(eventType, handler);
        }
    }, [handler])
}


const Cart = () => {

    const productos = useContext(CartContext).carrito;
    const clear = useContext(CartContext).clear;
    const getPrecio = useContext(CartContext).getPrecioTotal;
    let [state, setState] = useState(getPrecio());

    const clearAll = () => {
        clear();
        setState(0);
    }

    useAddCarrito(window.addEventListener("MyEventType", () => {
        setState(getPrecio())
    }))

    return (
        <div>
            <div> <h3>Carrito de Compra</h3></div>
            {(productos.length == 0) ?
                (<h4> El carrito está vacio </h4>)
                :
                (productos.map((producto) => (
                    <ItemDetail item={producto} type="cart" />
                )))
            }
            <div class="cart-checkOut">
                <div class="cart-checkOutTotal"> Total: ${state} </div>
                <button class="cart-checkOutTotalButton" data-bs-dismiss="offcanvas"> Finalizar Compra </button>
                {/* <button class="cart-checkOutTotalButton" data-bs-dismiss="offcanvas" onClick={() => { clearAll(); }}> Borrar todo </button> */}
                {(productos.length == 0) ?
                    (<Link to={{ pathname: `/colecciones` }}>
                        <button class="cart-checkOutTotalButton" data-bs-dismiss="offcanvas" > Seguir Comprando </button>
                    </Link>)
                    :
                    (<button class="cart-checkOutTotalButton" data-bs-dismiss="offcanvas" onClick={() => { clearAll(); }}> Borrar todo </button>)
                }
            </div>
        </div>
    )
}

export default Cart
