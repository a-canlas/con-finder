import React from 'react';
import Button from 'react-bootstrap/Button';

const ViewButton = props => {
  const view = props.viewName;
  return (
    <Button variant="info" onClick={() => props.toggleView(view)}>{view === 'list' ? 'List View' : 'Map View'}</Button>
  );
};

export default ViewButton;
