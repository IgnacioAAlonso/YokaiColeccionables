import React from 'react'
import ItemList from '../components/Item/ItemList'

const Colecciones = () => {

    const productos = [
        {
            id: 1,
            title: "Figura Batman – Dawn of Justice: Batman",
            description: "Figura de Batman: El Amanecer de la Justicia.",
            price: 100,
            stock: 10,
            pictureUrl: "https://i0.wp.com/www.coheto.com/wp-content/uploads/2019/07/figura-batman-v-superman-batman.jpg?fit=800%2C800&ssl=1"
        },
        {
            id: 2,
            title: "Figura DC Movie Gallery Batman 1989",
            description: "Estatua de PVC de la línea 'DC Gallery'",
            price: 150,
            stock: 8,
            pictureUrl: "https://dungeonmarvels.com/81864-large_default/figura-dc-movie-gallery-batman-1989-batman-41-cm.jpg"
        },
        {
            id: 3,
            title: "FIGURA BATMAN DECADES THROUGH THE AGES",
            description: "Batman en su primera aparición en el número 27 de Detective Comics.",
            price: 200,
            stock: 30,
            pictureUrl: "https://comicsbarcelona.com/80427-large_default/figura-batman-primera-aparicion-anos-40-eaglemoss-comprar.jpg"
        },
        {
            id: 4,
            title: "Figura Batman – The Dark Knight",
            description: "Figura de la segunda película, El Caballero Oscuro.",
            price: 670,
            stock: 20,
            pictureUrl: "https://collectoys.es/8947/figura-batman-sh-figuarts-the-dark-knight-bandai.jpg"
        },
        {
            id: 5,
            title: "Figura Armadura Batman vs Superman",
            description: "Figura de Batman de la Película Batman V Superman.",
            price: 500,
            stock: 3,
            pictureUrl: "https://dejadepensar.com/wp-content/uploads/2018/01/disfraz-armadura-batman-vs-superman.jpg"
        }
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <ItemList productosTotales={productos} />
        </div>
    )
}

export default Colecciones;
