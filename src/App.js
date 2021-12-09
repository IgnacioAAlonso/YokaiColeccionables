import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index'
import Colecciones from './pages/Colecciones';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes  >
        <Route path='/' element={<Home />} />
        <Route path='/colecciones' element={<Colecciones />} />
      </Routes >
    </Router>
  );
}

export default App;
