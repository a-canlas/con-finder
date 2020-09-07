import React from 'react';
import ConList from './ConList';
import ConDetails from './ConDetails';

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
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getConventions();
  }

  getConDetails(id) {
    const conDetail = this.state.listings.filter(listing => {
      return listing.conventionId === id;
    });
    this.setState({ modal: { content: conDetail[0], visible: true } });
  }

  closeModal() {
    this.setState({ modal: { visible: false, content: null } });
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

  formatDate(dateString) {
    const index = dateString.indexOf('T');
    const splitDate = dateString.slice(0, i).split();
    const splitMonth = splitDate[0];
    let month;
    switch (month) {
      case 1:
        year = 'January';
        break;
      case 2:
        year = 'February';
        break;
    }

  }

  render() {
    let conName = 'name';
    let conAddress = 'address';
    let conCity = 'city';
    let conState = 'state';
    let conCountry = 'country';
    let conImage = '/images/wut.jpg';
    let conStart = 'start';
    let conEnd = 'end';
    let conSite = '#';
    if (this.state.modal.visible !== false) {
      conName = this.state.modal.content.name;
      conImage = this.state.modal.content.imagePath;
      conAddress = this.state.modal.content.address;
      conCity = this.state.modal.content.city;
      conState = this.state.modal.content.state;
      conCountry = this.state.modal.content.country;
      conStart = this.state.modal.content.startDate;
      conEnd = this.state.modal.content.endDate;
      conSite = this.state.modal.content.website;
    }
    return (
      <>
        <ConDetails
          visible={this.state.modal.visible}
          hide={this.closeModal}
          conName={conName}
          conImage={conImage}
          address={conAddress}
          city={conCity}
          state={conState}
          country={conCountry}
          startDate={conStart}
          endDate={conEnd}
          website={conSite}
        />
        <ConList allCons={this.state.listings} getConDetails={this.getConDetails} />
        <p>Furry Con Finder</p>
      </>
    );
  }
}

export default App;
