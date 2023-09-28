import React from 'react';
import './navi.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Navi() {
  let navigate = useNavigate();
  const n = require('../../assets/navbar.png');

  const handleHome = () => {
    navigate('/')
  }
  const handleCon = () => {
    navigate('/contacts');
  }
  const handleShop = () => {
    navigate('/');
  }


  return (
    <div id='navi'>
      <img src={n} className='img' />
      
      <Row className='btns elite'>
        <Col className='col-6 logo'>
          <button className='homeBtn' onClick={handleHome}></button>
        </Col>
        <Col className='' style={{width: '1100px'}}></Col>
        <Col className='col-1'>
          <button className='conBtn' onClick={handleCon}>CONTACT</button>
        </Col>
        <Col className='col-1'>
          <button className='shopBtn' onClick={handleShop}>SHOP</button>
        </Col>
      </Row>
    </div>
  )
}
