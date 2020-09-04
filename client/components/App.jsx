import React from 'react';
import ConList from './ConList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null,
      modal: {
        visible: false,
        content: null
      }
    };
    this.getConventions = this.getConventions.bind(this);
    this.getConDetails = this.getConDetails.bind(this);
  }

  componentDidMount() {
    this.getConventions();
  }

  getConDetails(id) {
    const conDetail = this.state.listings.filter(listing => {
      return listing.conventionId === id;
    });
    this.setState({ modal: { content: conDetail[0] } });
  }

  getConventions() {
    fetch('/api/all-conventions')
      .then(data => data.json())
      .then(conventions => {
        this.setState({ listings: conventions });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <ConList allCons={this.state.listings} getConDetails={this.getConDetails} />
        <p>Furry Con Finder</p>
      </>
    );
  }
}

export default App;
