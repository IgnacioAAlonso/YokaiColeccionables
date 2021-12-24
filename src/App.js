import './App.css';
import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index'
import Colecciones from './pages/Colecciones';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';

function App() {
  // Estado del carrito
  const [carrito, setCarrito] = useState([])

  return (
    <Router>
      <Navbar />
      <Routes  >
        <Route path='/' element={<Home />} />
        <Route path='/colecciones' element={<Colecciones carrito={carrito} setCarrito={setCarrito} />} />
        <Route path='/category/:id' element={<Home />} />
        <Route path='/item/:id' element={<ItemDetailContainer carrito={carrito} setCarrito={setCarrito} />} />
      </Routes >
      <Carrito productos={carrito} />
    </Router>
  );
}

export default App;
