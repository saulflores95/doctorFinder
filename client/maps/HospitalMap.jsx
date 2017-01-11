import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

export default class HospitalMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        hospitals: Meteor.subscribe("userHospitals")
      },
    }
  }

  hospital(){
    return Hospitals.findOne(this.props.id);
  }

  render() {

    const styles = {
      leafletContainer: {
        width: '100%',
        height: '250',
      },
    }
    var hospitalMapIcon = L.icon({
      iconUrl: 'https://s27.postimg.org/cfa26e24z/clinic.png',
      popupAnchor: [18, 0],
    });

  const position = [this.state.lat, this.state.lng];
  let hospital = this.hospital();

  return (
    <div style={styles.leafletContainer}>
      <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker icon={hospital} position={position}>
            <Popup>
              <span>{hospital.name}</span>
            </Popup>
          </Marker>
        </Map>
      </div>

    )
  }
}
