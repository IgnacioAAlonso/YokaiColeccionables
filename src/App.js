import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index'
import Colecciones from './pages/Colecciones';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes  >
        <Route path='/' element={<Home />} />
        <Route path='/colecciones' element={<Colecciones />} />
        <Route path='/category/:id' element={<Home />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes >
    </Router>
  );
}

export default App;
