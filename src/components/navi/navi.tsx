import React from 'react';
import './navi.css';

export default function Navi() {

  const n = require('../../assets/navbar.png');

  return (
    <div id='navi'>
      <img src={n} className='img'/>
    </div>
  )
}
