import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../../api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class ConMap extends React.Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 33.634870,
          lng: -117.740450
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api.mapsKey
})(ConMap);
