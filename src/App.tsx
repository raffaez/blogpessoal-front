import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<ListaPostagem />} />
        <Route path='/temas' element={<ListaTema />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
