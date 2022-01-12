import React, { useState, useContext, useEffect } from "react";
import { NavLink as Link } from 'react-router-dom';
import ItemDetail from "../Item/ItemDetail/ItemDetail";
import CartContext from "./context/CartContext";
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query } from 'firebase/firestore';


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
    let [comprador, setComprador] = useState();

    const db = getFirestore();

    const clearAll = () => {
        clear();
        setState(0);
    }

    useAddCarrito(window.addEventListener("MyEventType", () => {
        setState(getPrecio())
    }))

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newItem = {nombre:e.target[0].value, apellido:e.target[1].value, telefono:e.target[2].value, mail:e.target[3].value}
        setComprador(newItem)
        document.getElementById("miForm").reset();
    }

    const handleClick = (e)=>{
        e.preventDefault()
        let order = {
            buyer: comprador,
            items: productos,
            total: state
        }
        const data = collection(db, "orders")
        addDoc(data,order).then((res)=>{
            console.log(res.id)
        })
    }

    return (
        <div>
            <div> <h3 class="cart-title">Carrito de Compras</h3></div>
            {(productos.length == 0) ?
                (<h4> El carrito está vacio </h4>)
                :
                (productos.map((producto) => (
                    <ItemDetail item={producto} type="cart" />
                )))
            }
            
            <div class="cart-form">
                <h5>Datos del comprador:</h5>
                <form id="miForm" onSubmit={handleSubmit}>
                <div class="row g-3 align-items-center">
                    <div class="col-6"> 
                        <label for="exampleInputPassword1" class="form-label">Nombre</label>
                        <input type="text" class="form-control"></input>
                    </div>

                    <div class="col-6">
                        <label for="exampleInputPassword1" class="form-label">Apellido</label>
                        <input type="text" class="form-control"></input>
                    </div>

                    <div class="col-6">
                        <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                        <input type="number" class="form-control"></input>
                    </div>

                    <div class="col-6">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"></input>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Enviar</button>
                </form>
            </div>

            <div class="cart-checkOut">
                <div class="cart-checkOutTotal"> Total: ${state} </div>
                <button class="cart-checkOutTotalButton" data-bs-dismiss="offcanvas" onClick={handleClick}> Finalizar Compra </button>
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
