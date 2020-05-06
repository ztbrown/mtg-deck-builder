import React from 'react';
import Deck from './Deck';
import Col from 'react-bootstrap/Col';

class VerticalDeckView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Col lg={3} right={'true'}>
        <Deck toggleView={this.props.toggleView} addCardToDeck={this.props.addCardToDeck} removeCardFromDeck={this.props.removeCardFromDeck} deck={this.props.deck}/>
      </Col>
    );
  }
}

export default VerticalDeckView

