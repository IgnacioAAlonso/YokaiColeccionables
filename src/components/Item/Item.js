import React from 'react'

const Item = () => {
    return (
        <div class="card" style={{width: '18rem'}}>
            <img src="..." class="card-img-top" alt="Catalogo" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="contenedor__cantidad">
                    <button class="btn btn-danger">-</button>
                    <p class="cantidad__item">1</p>
                    <button class="btn btn-primary">+</button>
                </div>
                <p class="stock__item">Stock Actual: 10</p>
            </div>
        </div>
    )
}

export default Item
