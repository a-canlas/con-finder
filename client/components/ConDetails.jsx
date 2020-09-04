import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConDetails = props => {
  return (
    <Modal
      show={props.visible}
      onHide={props.hide}
      backdrop="static"

    >
      <Modal.Header closeButton>
        <Modal.Title>{props.conName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.conImage} className="card-img" alt={`${props.conName} logo`}/>
        <p><strong>Location: </strong> {props.address}, {props.city}, {props.state} {props.country}</p>
        <p><strong>Date: </strong> {props.startDate} - {props.endDate} </p>
        <p><strong>Website: </strong> <a href={`http://${props.website}`} target="__blank"></a>{props.website}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={props.hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConDetails;
