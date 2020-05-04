import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './Card'

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollection = this.handleCollection.bind(this);
    this.state = {cards: []};
  }

  componentDidMount() {
    this.props.setHandler(this.handleCollection)
  }

  processCards(data) {
    var cards = data.split("\n");
    cards = cards.map(card => { return  {name: card.split(/(?<=^\S+)\s/)[1], count: card.split(/x(.+)/)[0],}})
    this.setState({cards:cards})
  }

  handleCollection(e) {
    const reader = new FileReader()
    reader.onload  = event => this.processCards(event.target.result)
    reader.onerror = error => console.log(error) 
    reader.readAsText(e.currentTarget.files[0])
  }

  render() {
    return (
      <>
        {this.state.cards.map((card, i) => (
          <Card key={card.name} addCardToDeck={this.props.addCardToDeck} data={card}/> 
        ))}
      </>
    );
  }
}

export default Collection;
