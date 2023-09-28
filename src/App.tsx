import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi/navi';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navi />



      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<About/>} />
        <Route path='/contacts' element={<Contact/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
