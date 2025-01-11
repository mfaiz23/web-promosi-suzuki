import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';
import Home from './pages/home';
import Mobil from './pages/mobil';
import Galeri from './pages/galeri';
import Harga from './pages/harga';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobil" element={<Mobil />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/harga" element={<Harga />} />
      </Routes>
    </Router>
  );
}

export default App;
