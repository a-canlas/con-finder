import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null
    };
  }

  render() {
    return (
      <p>Furry Con Finder</p>
    );
  }
}

export default App;
