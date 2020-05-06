import React from 'react';
import Button from 'react-bootstrap/Button';

class HorizontalDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deck: props.deck}
    this.toggleView = props.toggleView
  }

  render() {
    return (
      <>
      <Button onClick={() => this.toggleView()}>dock</Button>
      {this.state.deck.map((card, i) => (
        <p>{card.name}</p>
      ))}
      </>
    )
  }

}

export default HorizontalDeck;
