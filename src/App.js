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
  constructor(props) {
    super(props);
    this.state = {deck: []}
    this.addCardToDeck = this.addCardToDeck.bind(this)
    this.removeCardFromDeck = this.removeCardFromDeck.bind(this)
  }

  addCardToDeck(cardToAdd) {
    let deck = this.state.deck
    let card = Object.assign({}, cardToAdd)
    card.count = 1
    const index = deck.map(function(e) { return e.name; }).indexOf(card.name);
    if (index === -1){
      deck.push(card)
    } else {
      deck[index].count += 1
    }
    this.setState({deck: deck})
  }

  removeCardFromDeck(card) {
    let deck = this.state.deck
    const index = deck.map(function(e) { return e.name; }).indexOf(card.name);
    if (deck[index] && deck[index].count > 1) {
      deck[index].count -= 1
    } else if (index != -1) {
      deck.splice(index, 1)
    }
    this.setState({deck: deck})
  }

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
          <Col lg={9} left={'true'}>
            <Collection addCardToDeck={this.addCardToDeck} setHandler={handler => this.loadCollection = handler}></Collection>
          </Col>
          <Col lg={3} right={'true'}>
            <Deck addCardToDeck={this.addCardToDeck} removeCardFromDeck={this.removeCardFromDeck} deck={this.state.deck}/>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
