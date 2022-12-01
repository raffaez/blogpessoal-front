import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/static/footer/Footer';
import './App.css';
import Posts from './pages/posts/Posts';
import Themes from './pages/themes/Themes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/themes' element={<Themes />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
