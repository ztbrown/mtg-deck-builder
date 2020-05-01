import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {card: props.data, image_url: "https://img.scryfall.com/cards/large/front/0/3/03c3dc23-d6f2-4209-82e1-a0b936c94231.jpg?1572892490" }
  }

  componentDidMount() {
    fetch(`https://api.scryfall.com/cards/named?exact=${this.state.card.name}`)
      .then(response => response.json())
      .then(data => {
        try {
          this.setState({card: { name: this.state.card.name, image_url: data.image_uris.small}})
        }
        catch (e) {
          console.log(data)
        }
      });
  }

  render(){
    return (
      <span>
        <img name={this.state.card.name} src={this.state.card.image_url} width="165px"/>
      </span>
    );
  }
} 

export default Card;
