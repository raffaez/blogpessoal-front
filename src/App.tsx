import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

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
        <Route path="/formularioPostagem" element={<CadastroPostagem />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
