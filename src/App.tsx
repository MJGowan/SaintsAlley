import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi/navi';
import About from './pages/about/about';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div>
      <Navi />
      {/* <About/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
