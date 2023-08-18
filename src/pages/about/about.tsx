import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {

  const record = require('../../assets/recordspin.gif');
  const signature = require('../../assets/signature.png');
  const tear = require('../../assets/thintear.png');
  const logo = require('../../assets/bigwhitelogo.png');

  return (
    <div id='about'>
      <img src={record} className='spin' />
      <Container className='mb-4'>
        <Row>
          <Col className='col-8'></Col>
          <Col>
            <img src={signature} className='sig' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='rubik'>So you like records?</h1>
            <br/>
            <h4 className='elite'>So do I, and I hope to share my love of music by providing a place to get new and used vinyl at a fair price. Every record on the site is new and unplayed unless it's noted in the item description. Whether I get the record from the band themselves, the label, or one of my distributors they remain sealed. I do my best to stock a variety but reach out if there's something you like but don't see on the site. It never hurts to ask. Just remember a little respect goes a long way. If you can’t respect me, you can kick rocks.</h4>
          </Col>
        </Row>
      </Container>
      <img src={tear}/>
    <Container className='mb-5'>
      <Row>
        <Col className='mt-5 pt-3'>
          <h4 className='elite'>If I look familiar, you may have seen my old band playing at Rebels or Finnegan’s. Now my girlfriend and I sell records and other music-related items. Music is a big part of my life, and through my business I hope to bring music to your life as well. There’s nothing better than opening a new record and hearing the needle hit the edge. Come pick up a record and experience it yourself, you can thank me later when you come back to get another.</h4>
        </Col>
        <Col className='d-flex justify-content-center'>
          <img src={logo} className='w-75'/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
