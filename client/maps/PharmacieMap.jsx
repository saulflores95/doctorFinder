import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';


export default class PharmacieMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    };
  }

  componentWillUnmount(){
    this.state.subscription.pharmacies.stop();
  }

  pharmacies(){
    return Pharmacies.find().fetch();
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const styles = {
      leafletContainer: {
        width: '100%',
        height: 600,
      },
    }
    var stationMarker = L.icon({
      iconUrl: 'https://s15.postimg.org/x8j35nsqz/Icon.png',
      iconSize: [80, 80],
      iconAnchor: [38, 38],
      popupAnchor: [0, -30],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });

    return (
      <div style={styles.leafletContainer}>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.pharmacies().map((pharmacie, index)=>{
            return <Marker icon={stationMarker} position={[pharmacie.coordenates.lat[index], pharmacie.coordenates.lng[index]]}>
              <Popup>
                <span>Location. <br/>{pharmacie.name}</span>
              </Popup>
            </Marker>
          })}
        </Map>
      </div>
    );
  }

}
