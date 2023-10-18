import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  const record = require('../../assets/record.png');
  const tape = require('../../assets/tape.png');
  const logo = require('../../assets/largelogo.png');

  let navigate = useNavigate();

  const handleAbt = () => {
    navigate('/aboutme')
  }

  return (
    <div id='home'>
      <img src={record} className='record' />
      <Container>
        <Row>
          <Col className='col-8'>
            <h1 className='rubik title'>California Pop-Up</h1>
            <h1 className='rubik title'>Record Shop</h1>
            <h2 className='rubik' style={{ color: 'goldenrod' }}>Turned Brick & Mortar</h2>
          </Col>
        </Row>
        <Row className='mt-4 mb-4 tapeRow'>
          <Col className='col-8 d-flex justify-content-center'>
            <img src={tape} className='tape' />
            <p className='elite tapetxt'>Located in Wildwood Skate Shop</p>
            <p className='elite tapetxt2'>872 W. Kettleman Lane, Lodi CA</p>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <button className='elite aboutBtn' onClick={handleAbt}>ABOUT US</button>
          </Col>
        </Row>
        <Row className='paperRow mt-4 mb-5'>
          <a href='https://www.instagram.com/saintsalleyrecords/' target="_blank" rel="noreferrer" className='paper'>
            <Row>
              <Col className='col-5'>
                <img src={logo} className='logo' />
              </Col>
              <Col className='papertxt'>
                <p className='elite'>Follow Saints Alley on Instagram</p>
                <p className='elite'>@saintsalleyrecords</p>
              </Col>
            </Row>
          </a>
        </Row>
      </Container>
    </div>
  )
}
