import React from 'react';
import Container from 'react-bootstrap/Container';
import Convention from './Convention';

class ConList extends React.Component {
  generateList() {
    if (!this.props.allCons) {
      return (
        <h1 className="loader center">
          <i className="fas fa-spinner fa-pulse"/>
        </h1>
      );
    } else {
      const allCons = this.props.allCons;
      const conElements = allCons.map(con => {
        return (
          <Convention key={con.conventionId} conImage={con.imagePath} conName={con.name} conCity={con.city} conState={con.state} />
        );
      });
      return (
        <Container>
          {conElements}
        </Container>
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
