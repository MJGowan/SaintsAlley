import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function footer() {
  return (
    <div id='footer'>
      <Container>
        <Row>
          <Col>
            <p className='elite'>2022 COPYRIGHT © SAINTS ALLEY RECORDS</p>
          </Col>
          <Col> <p className='elite d-flex justify-content-end'>872 W. Kettleman Lane, Lodi CA</p></Col>
        </Row>
        <Row>
        <Col>
            <p className='elite'>Privacy</p>
          </Col>
          <Col>
          <p className='elite d-flex justify-content-end'>@saintsalleyrecords</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
