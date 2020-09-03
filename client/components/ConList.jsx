import React from 'react';

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
        <div>List here...</div>
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
