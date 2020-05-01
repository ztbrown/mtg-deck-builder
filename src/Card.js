import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Card(props) {
  return (
    <span>
    <img name={props.data.name} src={props.data.image_url} width="165px"/>
    </span>
  );
} 

export default Card;
