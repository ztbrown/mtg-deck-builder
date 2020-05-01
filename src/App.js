import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Collection from './Collection';
import Deck from './Deck';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">DeckBuilder</Navbar.Brand>
          <Nav className="mr-auto">
            <Form inline>
              <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
            </Form>
          </Nav>
          <input type="file" onChange={(e) => this.loadCollection(e)}/>
        </Navbar>
        <Row>
          <Col lg={9} left>
            <Collection setHandler={handler => this.loadCollection = handler}></Collection>
          </Col>
          <Col lg={3} right>
            <Deck></Deck>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
