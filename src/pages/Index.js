import React from 'react'
import ItemListContainer from '../components/Item/ItemList/ItemListContainer'
import Titles from '../components/Titles'
import { NavLink as Link } from 'react-router-dom';
import '../App.css'

const Home = () => {

    return (
        <div class="contenedorAll">
            {/* <div style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}>
                <Titles textoTitulo={"Inicio"}></Titles>
            </div> */}
            {/* <ItemListContainer /> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.cuevadelobo.com/wp-content/uploads/2014/08/Batman-4.jpg" class="d-block w-100" alt="Banner Batman" />
                        <Link to="/category/batman">
                            <button class="carousel-itemButton">
                                Batman
                            </button>
                        </Link>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.wallpapersafari.com/5/93/R5lFOX.jpg" class="d-block w-100" alt="Banner SpiderMan" />
                        <Link to="/category/spiderman">
                            <button class="carousel-itemButton">
                                Spider-Man
                            </button>
                        </Link>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.alphacoders.com/575/thumb-1920-575815.png" class="d-block w-100" alt="Banner Cyclops" />
                        <Link to="/category/xmen">
                            <button class="carousel-itemButton">
                                X-Men
                            </button>
                        </Link>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="contenedor__informacion">
                <div class="contenedor__informacionDiv">
                    <i class="fas fa-truck"></i>
                    <p class="contenedor__informacionTit">Envios a toda la Argentina </p>
                    <p class="contenedor__informacionSubTit">Envio con Mercado Libre o Correo</p>
                </div>
                <div class="contenedor__informacionDiv contenedor__informacionDiv">
                    <i class="fas fa-credit-card"></i>
                    <p class="contenedor__informacionTit">Pagá como quieras</p>
                    <p class="contenedor__informacionSubTit">Tarjetas, efectivo y más</p>
                </div>
                <div class="contenedor__informacionDiv contenedor__informacionDiv">
                    <i class="fas fa-shield-alt"></i>
                    <p class="contenedor__informacionTit">Comprá seguro</p>
                    <p class="contenedor__informacionSubTit">Simpre cuidamos tu medio de pago</p>
                </div>
            </div>
        </div>
    )
}

export default Home
