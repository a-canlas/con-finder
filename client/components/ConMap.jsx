import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../../api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class ConMap extends React.Component {
  constructor(props) {
    super(props);
    this.plotMarkers = this.plotMarkers.bind(this);
  }

  plotMarkers() {
    const locations = [...this.props.locations];
    const markers = locations.map(l => {
      return <Marker key={l.conventionId} id={l.conventionId} position={{ lat: l.latitude, lng: l.longitude }} onClick={() => this.props.getConDetails(l.conventionId)}/>;
    });
    return markers;
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
          lat: 38.919465,
          lng: -102.058846
        }}
      >
        {this.plotMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api.mapsKey
})(ConMap);
