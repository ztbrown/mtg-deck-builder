import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Collection from './Collection';
import Deck from './Deck';

function App() {
  return (
          <Row>
            <Col lg={9} left>
              <Collection></Collection>
            </Col>
            <Col lg={3} right>
              <Deck></Deck>
            </Col>
          </Row>
  );
}

export default App;
