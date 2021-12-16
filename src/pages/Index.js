import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import Titles from '../components/Titles'

const Home = () => {

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}>
                <Titles textoTitulo={"Inicio"}></Titles>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home
