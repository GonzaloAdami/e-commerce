import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import './output.css';

import Producto from './components/Product/Index/producto';
import Home from './components/Home/Index/home';


function App() {
  const [count, setCount] = useState(0);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
      </Routes>
    </Router>
  );
}

export default App;
