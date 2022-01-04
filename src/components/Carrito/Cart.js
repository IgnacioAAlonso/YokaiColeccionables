import React, { useContext } from "react";
import ItemDetail from "../Item/ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const productos = useContext(CartContext).carrito;
    const clear = useContext(CartContext).clear;
    const getPrecio = useContext(CartContext).getPrecioTotal;

    const clearAll = () => {
        clear();
    }

    return (
        <div>
            {(productos.length == 0) ?
                (<p> El carrito está vacio </p>) :
                (productos.map((producto) => (
                    <ItemDetail item={producto} type="carrito" />
                )))
            }
            <div class="offcanvas-checkOut">
                <div> {getPrecio()} </div>
                <button class="offcanvas-checkOutButton" data-bs-dismiss="offcanvas"> Finalizar Compra </button>
                <button class="offcanvas-checkOutButton" data-bs-dismiss="offcanvas" onClick={() => { clearAll(); }}> Borrar todo </button>
            </div>
        </div>
    )
}

export default Cart
