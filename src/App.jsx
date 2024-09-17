import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import './output.css';

import Producto from './components/producto';
import Home from './components/home';
import Pages from './components/pages'; // Asegúrate de que este componente está en uso o elimínalo si no es necesario

function App() {
  const [count, setCount] = useState(0);

  const productos = [
    { color: '#B9101E',reputacion: 'Mala', porcentaje: 25, atributo: 'Reputacion', icon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726600219/verified-ui-shield-svgrepo-com_2_hri0jr.jpg?_s=public-apps'},
    { color: '#ffa819',reputacion: 'Media', porcentaje: 50, atributo: 'Atencion', icon: ''},
    { color: '#19ff77',reputacion: 'Buena', porcentaje: 75, atributo: 'Velocidad de entrega', icon: 'https://asset.cloudinary.com/dt6otshxt/19807a3983ada126be1c1e79d481724d'}
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto productos={productos} />} />
      </Routes>
    </Router>
  );
}

export default App;
