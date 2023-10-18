import React, {useState} from 'react';
import './navi.css';
import { Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navi() {
  let navigate = useNavigate();
  const n = require('../../assets/navbar.png');

  const handleHome = () => {
    navigate('/')
  }
  const handleCon = () => {
    navigate('/contacts');
  }
  const handleAbt = () => {
    navigate('/aboutme');
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id='navi'>
      <img src={n} className='img' />
      <Row className='elite'>
        <button className='btns homeBtn' onClick={handleHome}></button>
        <Row className='btns'>
          <Col></Col>
          
          <Col className='col-1 d-none d-md-block'>
            <button className='conBtn' onClick={handleCon}>CONTACT</button>
          </Col>
          <Col className='col-2 d-none d-md-block'>
            <button className='abtBtn' onClick={handleAbt}>ABOUT US</button>
          </Col>
          <Col className='col-1 d-md-none'>
            <button className='drop' onClick={handleShow}>
            <MenuIcon className='dropIcon'/>
            </button>
            
          </Col>
        </Row>
      </Row>

      <>
      <Offcanvas className='offcanvas' show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col className='d-flex justify-content-center'>
              <a onClick={handleCon}><h3 className='elite'>Contacts</h3></a>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className='d-flex justify-content-center'>
              <a onClick={handleAbt}><h3 className='elite'>About Us</h3></a>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>

    </div>
  )
}
