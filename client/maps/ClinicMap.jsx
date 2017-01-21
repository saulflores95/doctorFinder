import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

export default class ClinicMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        clinics: Meteor.subscribe("userClinics")
      },
    }
  }

  clinic(){
    return Clinics.findOne(this.props.id);
  }

  render() {

    const styles = {
      leafletContainer: {
        width: '100%',
        height: '400',
      },
    }
    var clinicMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
      popupAnchor: [18, 0],
    });

  let clinic = this.clinic();
  const position = [this.state.lat, this.state.lng];


  return (
    <div className="map-clinic">
      <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker icon={clinicMapIcon} position={position}>
            <Popup>
              <span>{clinic.name}</span>
            </Popup>
          </Marker>
        </Map>
      </div>

    )
  }
}
