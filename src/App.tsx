import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi/navi';
import About from './pages/about/about';
import './App.css';

function App() {
  return (
    <div>
      <Navi />
      <About/>
    </div>
  );
}

export default App;
