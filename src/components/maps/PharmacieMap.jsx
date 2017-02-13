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

  pharmacie(){
    return Pharmacies.findOne(this.props.id);
  }

  render() {
    let pharmacie = this.pharmacie();
    const position = [pharmacie.latitude, pharmacie.longitude];
    const positionState = [this.state.lat, this.state.lng];

    const styles = {
      leafletContainer: {
        width: '100%',
        height: 600,
      },
    }
    var PharmacieMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
    //iconSize: [80, 80],
    // iconAnchor: [38, 38],
    popupAnchor: [18, 0],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });

    return (
      <div className="map-pharmacie">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
            <div>
            <Marker icon={PharmacieMapIcon} position={position}>
              <Popup>
                <span>Location. <br/>{pharmacie.name}</span>
              </Popup>
            </Marker>
            </div>
        </Map>
      </div>
    );
  }

}
