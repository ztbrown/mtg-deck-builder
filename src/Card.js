import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.addCardToDeck = props.addCardToDeck
    this.state = {card: props.data }
  }

  componentDidMount() {
    fetch(`https://api.scryfall.com/cards/named?exact=${this.state.card.name}`)
      .then(response => response.json())
      .then(data => {
        try {
          this.setState({card: { 
            name: this.state.card.name, 
            image_url: data.image_uris.small,
            cmc: data.cmc,
            color_identity: data.color_identity,
            colors: data.colors,
            mana_cost: data.mana_cost
          }})
        }
        catch (e) {
          console.log(data)
        }
      });
  }

  clickHandler() {
    console.log(this.state)
    this.addCardToDeck(this.state.card);
  }

  render(){
    return (
      <span>
        <img name={this.state.card.name} onClick={() => this.clickHandler()} src={this.state.card.image_url} width="165px"/>
      </span>
    );
  }
} 

export default Card;
