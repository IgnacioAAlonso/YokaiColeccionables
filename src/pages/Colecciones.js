import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Colecciones = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <ItemListContainer textoTitulo={"Colecciones"}></ItemListContainer>
        </div>
    )
}

export default Colecciones;
