import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import CardListItem from './CardListItem'

class Deck extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.deck)
    this.state = {deck: props.deck }
  }

  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Deck</Navbar.Brand>
        <FontAwesomeIcon className="justify-content-end" icon={faAngleDoubleDown} right={'true'}/>
      </Navbar>
      {this.state.deck.map((card, i) => (
        <CardListItem addCardToDeck={this.props.addCardToDeck} removeCardFromDeck={this.props.removeCardFromDeck} key={card.name} data={card}/>
      ))}
      </>
    );
  }
}

export default Deck;


