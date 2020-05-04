import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

class CardListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeCardFromDeck = props.removeCardFromDeck
    this.addCardToDeck = props.addCardToDeck
    this.state = {card: props.data} 
  }

  addClickHandler() {
    this.addCardToDeck(this.state.card)
  }

  removeClickHandler() {
    this.removeCardFromDeck(this.state.card)
  }

  render() {
    return (
      <div><span onClick={() => this.addClickHandler()} class="badge badge-primary">{this.state.card.count}</span><span onClick={() => this.removeClickHandler()}>{this.state.card.name}</span></div>
    );
  }
}

export default CardListItem;



