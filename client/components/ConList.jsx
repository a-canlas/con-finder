import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

          <Col key={con.conventionId} xs={12} sm={6} md={4}>
            <Convention conId={con.conventionId} conImage={con.imagePath} conName={con.name} conCity={con.city} conState={con.state} sendId={this.props.getConDetails} />
          </Col>

        );
      });
      return (
        <Container>
          <Row>
            {conElements}
          </Row>
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
