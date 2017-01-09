import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

export default class DoctorMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        doctors: Meteor.subscribe("userDoctors")
      },
    }
  }

  doctor(){
    return Doctors.findOne(this.props.id);
  }

  render() {

    const styles = {
      leafletContainer: {
        width: '100%',
        height: '250',
      },
    }
    var DoctorMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/3xsvniynh/doc.png',
    //iconSize: [80, 80],
    // iconAnchor: [38, 38],
    popupAnchor: [18, 0],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });
  const position = [this.state.lat, this.state.lng];
  let doctor = this.doctor();

  return (
    <div style={styles.leafletContainer}>
      <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker icon={DoctorMapIcon} position={position}>
            <Popup>
              <span>{doctor.name}</span>
            </Popup>
          </Marker>
        </Map>
      </div>

    )
  }
}
