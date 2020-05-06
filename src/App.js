import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './App.css'

import Collection from './Collection';
import VertcalDeckView from './VerticalDeckView'
import HorizontalDeckView from './HorizontalDeckView'

var classNames = require('classnames');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deck: [], viewHorizontal: true}
    this.addCardToDeck = this.addCardToDeck.bind(this)
    this.removeCardFromDeck = this.removeCardFromDeck.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView() {
    this.state.viewHorizontal = !this.state.viewHorizontal
    this.setState(this.state)
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
    var upper = classNames({
      upper: this.state.viewHorizontal
    });
    console.log(upper)
    var lower = classNames({
      lower: this.state.viewHorizontal
    });
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
        <Row className={ upper }>
          <Col lg={this.state.viewHorizontal ? 12: 9} left={'true'}>
            <Collection addCardToDeck={this.addCardToDeck} setHandler={handler => this.loadCollection = handler}></Collection>
          </Col>
          { this.state.viewHorizontal ? null : <VertcalDeckView toggleView={this.toggleView} addCardToDeck={this.addCardToDeck} removeCardFromDeck={this.removeCardFromDeck} deck={this.state.deck} /> }
        </Row>
      <Row className={ lower }>
        { this.state.viewHorizontal ? <HorizontalDeckView toggleView={this.toggleView} removeCardFromDeck={this.removeCardFromDeck} deck={this.state.deck}/> : null }
      </Row>
      </>
    );
  }
}

  export default App;
