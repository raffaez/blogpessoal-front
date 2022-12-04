import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Postagens from './pages/postagens/Postagens';
import Temas from './pages/temas/Temas';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
        <Route path='/home' element={<Home />} />
        <Route path='/postagens' element={<Postagens />} />
        <Route path='/temas' element={<Temas />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
