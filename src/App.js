import './App.css';
import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index'
import Colecciones from './pages/Colecciones';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import CustomCarrito from './components/Carrito/CustomCarrito';

function App() {
  // Estado del carrito
  const [carrito, setCarrito] = useState([])

  return (
    <CustomCarrito>

      <Router>
        <Navbar />
        <Routes  >
          <Route path='/' element={<Home />} />
          <Route path='/colecciones' element={<Colecciones/>} />
          <Route path='/category/:id' element={<Home />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart'/>
        </Routes >
        <Carrito/>
      </Router>

    </CustomCarrito>
  );
}

export default App;
