import React from 'react';
import Container from 'react-bootstrap/Container';

class ConList extends React.Component {
  generateList() {
    if (!this.props.allCons) {
      return (
        <h1 className="loader center">
          <i className="fas fa-spinner fa-pulse"/>
        </h1>
      );
    } else {
      return (
        <Container></Container>
      );
    }
  }

  render() {
    return (
      <>
        {this.generateList()}
      </>
    );
  }
}

export default ConList;
