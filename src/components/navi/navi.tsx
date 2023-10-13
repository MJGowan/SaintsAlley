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
      <Row className='elite'>
        <button className='btns homeBtn' onClick={handleHome}></button>
        <Row className='btns'>
          <Col></Col>
          <Col className='col-md-1 col-2'>
            <button className='conBtn' onClick={handleCon}>CONTACT</button>
          </Col>
          <Col className='col-md-1 col-1'>
            <button className='shopBtn' onClick={handleShop}>SHOP</button>
          </Col>
        </Row>
      </Row>
    </div>
  )
}
