import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null
    };
    this.getConventions = this.getConventions.bind(this);
  }

  componentDidMount() {
    this.getConventions();
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
      <p>Furry Con Finder</p>
    );
  }
}

export default App;
