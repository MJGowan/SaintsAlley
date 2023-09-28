import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        <Row className='mt-5 mb-5 tapeRow'>
          <Col className='col-8 d-flex justify-content-center'>
            <img src={tape} className='tape' />
            <p className='elite tapetxt'>Located in Wildwood Skate Shop</p>
            <p className='elite tapetxt2'>872 W. Kettleman Lane, Lodi CA</p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col>
            <button className='elite aboutBtn' onClick={handleAbt}>ABOUT US</button>
          </Col>
        </Row>
        <Row className='paperRow mt-5 mb-5'>
          <Container className='paper'>
            <Row>
              <Col className='col-5'>
                <img src={logo} className='logo' />
              </Col>
              <Col>
                <Row className='mt-4'>
                  <Col className='col-1'>
                    <InstagramIcon style={{fontSize: '45px'}} className='icon' />
                  </Col>
                  <Col>
                    <h2 className='elite'>Follow Saints Alley on Instagram</h2>
                    <h2 className='elite'>@saintsalleyrecords</h2>
                  </Col>
                </Row>
                <Row className='mt-4 txtend'>
                  <h2 className='elite' style={{color: '#FE3039'}}>Get your favorite records</h2>
                  <h2 className='elite' style={{color: '#FE3039'}}>delivered right to your door</h2>
                </Row>
                <Row className='mt-5 txtend'>
                  <h2 className='elite'>We ship anywhere in the United States!</h2>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  )
}
