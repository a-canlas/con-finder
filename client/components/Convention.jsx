import React from 'react';
import Card from 'react-bootstrap/Card';

const Convention = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.conImage}/>
      <Card.Body>
        <Card.Title>{props.conName}</Card.Title>
        <Card.Text>{props.conCity}, {props.conState}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Convention;
