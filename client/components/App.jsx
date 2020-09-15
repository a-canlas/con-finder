import React from 'react';
import ConList from './ConList';
import ConDetails from './ConDetails';
import ConMap from './ConMap';
import ViewButton from './ViewButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null,
      modal: {
        visible: false,
        content: null
      },
      view: 'list'
    };
    this.getConventions = this.getConventions.bind(this);
    this.getConDetails = this.getConDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.toggleView = this.toggleView.bind(this);
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
    const i = dateString.indexOf('T');
    const splitDate = dateString.slice(0, i).split('-');
    const year = splitDate.shift();
    const oldMonth = splitDate.shift();
    splitDate.push(year);
    let month;
    switch (oldMonth) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = 'February';
        break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
    }
    splitDate.unshift(month);
    return splitDate.join(' ');

  }

  toggleView(view) {
    this.setState({ view: view });
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
      conStart = this.formatDate(this.state.modal.content.startDate);
      conEnd = this.formatDate(this.state.modal.content.endDate);
      conSite = this.state.modal.content.website;
    }

    if (this.state.view === 'list') {
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
          <ConList allCons={this.state.listings} getConDetails={this.getConDetails} formatDate={this.formatDate}/>
          <ViewButton viewName="map" toggleView={this.toggleView} />
        </>
      );
    } else if (this.state.view === 'map') {
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
          <ConMap locations={this.state.listings} getConDetails={this.getConDetails}/>
        </>
      );
    }
  }
}

export default App;
