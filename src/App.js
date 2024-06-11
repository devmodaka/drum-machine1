import React from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

const App = () => {
  return (
    <Container className="drum-machine" id="drum-machine">
      <Row>
        <Col md={6}>
          <DrumPad />
        </Col>
        <Col md={6}>
          <Display />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
