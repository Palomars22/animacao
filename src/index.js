import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './pages/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/banner' element={<Banner/>} />
      <Route path='/sobre' element={<About/>} />
      <Route path='/cadastro' element={<Register/>} /> 
    </Routes>
  </BrowserRouter>
);
