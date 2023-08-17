import React from 'react';
import './navi.css';
import { Row, Col, Button } from 'react-bootstrap';

export default function Navi() {

  const n = require('../../assets/navbar.png');

  return (
    <div id='navi'>
      <img src={n} className='img' />
      <Row className='btns elite'>
        <Col></Col>
        <Col className='col-1'>
          <Button className='conBtn'>Contact</Button>
        </Col>
        <Col className='col-1'>
          <Button className='shopBtn'>Shop</Button>
        </Col>
      </Row>
    </div>
  )
}
