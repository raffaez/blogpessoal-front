import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/static/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
