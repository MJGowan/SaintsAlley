import React from 'react';
import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function contact() {
  const insta = require('../../assets/InstagramLogo.png');
  const mail = require('../../assets/Envelope.png');
  const box = require('../../assets/Package.png');
  const store = require('../../assets/Storefront.png');

  const filler = require('../../assets/Web capture_3-1-2023_104034_www.instagram 2.png');

  return (
    <div id='contact' className='mb-5 elite'>
      <Container>
        <Row className='rubik title mb-4'>
          <p>If you need to, you can find me at...</p>
        </Row>
        <Row>
          <Col className='mt-5'>
            <Row className='mb-5'>
              <Col className='col-4 d-flex justify-content-end'>
                <img src={insta} className='icon icon1'/>
              </Col>
              <Col>
              <p className='txt'>@saintsalleyrecords</p>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col className='col-4 d-flex justify-content-end'>
                <img src={mail} className='icon icon2'/>
              </Col>
              <Col>
              <p className='txt'>Mike@saintsalleyrecords.com</p>
              </Col>
            </Row>
            <Row>
              <Col className='col-4 d-flex justify-content-end'>
                <img src={store} className='icon icon3'/>
              </Col>
              <Col>
              <p className='txt'>872 W. Kettleman Lane, Lodi CA</p>
              </Col>
            </Row>
          </Col>
          <Col className='d-flex justify-content-center'>
            <img src={filler} className='filler'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
