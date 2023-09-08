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
          <Button className='conBtn'>CONTACT</Button>
        </Col>
        <Col className='col-1'>
          <Button className='shopBtn'>SHOP</Button>
        </Col>
      </Row>
    </div>
  )
}
