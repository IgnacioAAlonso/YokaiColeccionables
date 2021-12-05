import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <ItemListContainer textoTitulo={"Inicio"}></ItemListContainer>
        </div>
    )
}

export default Home
