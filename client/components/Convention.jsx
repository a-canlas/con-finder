import React from 'react';
import Card from 'react-bootstrap/Card';

const Convention = props => {
  const id = props.conId;
  return (
    <Card className="my-1" onClick={() => props.sendId(id)}>
      <Card.Img className="card-img p-2" variant="top" src={props.conImage}/>
      <Card.Body>
        <Card.Title>{props.conName}</Card.Title>
        <Card.Text>{props.conCity}, {props.conState}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Convention;
