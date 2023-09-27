import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi/navi';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div>
      <Navi />
      {/* <Home/> */}
      {/* <About/> */}
    <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
