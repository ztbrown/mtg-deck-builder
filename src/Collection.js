import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './Card'

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: []};
  }

  componentDidMount() {
    navigator.permissions.query({name: "clipboard-read"}).then(result => {
      // If permission to read the clipboard is granted or if the user will
      // be prompted to allow it, we proceed.

      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.readText().then(data => {
          var cards = data.split("\n");
          cards = cards.map(card => { return  {name: card.split(/(?<=^\S+)\s/)[1], image_url: "https://img.scryfall.com/cards/png/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.png?1582021671"}})
          this.setState({cards: cards});
        });
      }
    });
  }

  //async function processCards(cards) {
  //  return cards.map(card => {
  //    let response = await fetch(`https://api.scryfall.com/cards/named?exact=${card}`) 
  //    {image_url: card.image_uris.png}
  //  })
  //}

  render() {
    return (
      <>
      {this.state.cards.map(card => (
        <Card data={card}/> 
      ))}
      </>
    );
  }
}

export default Collection;
