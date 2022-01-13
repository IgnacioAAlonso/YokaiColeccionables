import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index'
import Colecciones from './pages/Colecciones';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';
import Nosotros from './pages/Nosotros';
import Cart from './components/Carrito/Cart';
import Orders from './components/Orders/Orders';
import Carrito from './components/Carrito/Carrito';
import CustomCarrito from './components/Carrito/CustomCarrito';
import ItemListContainer from './components/Item/ItemList/ItemListContainer';

function App() {

  return (
    <CustomCarrito>

      <Router>
        <Navbar />
        <Routes  >
          <Route path='/' element={<Home />} />
          <Route path='/colecciones' element={<Colecciones />} />
          <Route path='/category/:id' element={<Colecciones />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
        </Routes >
      </Router>

    </CustomCarrito>
  );
}

export default App;
