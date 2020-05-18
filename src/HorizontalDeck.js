import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardListItem from './CardListItem'

class HorizontalDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deck: props.deck}
  }

  render() {
    return (
      <Row>
        <Col lg={3}>
        {this.state.deck.map((card, i) => (
        <CardListItem addCardToDeck={this.props.addCardToDeck} removeCardFromDeck={this.props.removeCardFromDeck} key={card.name} data={card}/>
        ))}
      </Col>
      <Col lg={9}>
      </Col>
      </Row>
    )
  }

}

export default HorizontalDeck;
