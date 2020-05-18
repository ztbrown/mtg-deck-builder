import React from 'react';
import Button from 'react-bootstrap/Button';
import HorizontalDeck from './HorizontalDeck';

class HorizontalDeckView extends React.Component {
  constructor(props) {
    super(props)
    this.toggleView = props.toggleView
  }

  render() {
    return(
      <>
      <Button onClick={() => this.toggleView()}>dock</Button>
      <HorizontalDeck toggleView={this.props.toggleView} removeCardFromDeck={this.props.removeCardFromDeck} deck={this.props.deck}></HorizontalDeck>
      </>
    );
  }
}

export default HorizontalDeckView
