import React from 'react';
import HorizontalDeck from './HorizontalDeck';

class HorizontalDeckView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
  <HorizontalDeck toggleView={this.props.toggleView} removeCardFromDeck={this.props.removeCardFromDeck} deck={this.props.deck}></HorizontalDeck>
    );
  }
}

export default HorizontalDeckView
