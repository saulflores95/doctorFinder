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
    const position = [this.state.lat, this.state.lng];
    let pharmacie = this.pharmacie();

    const styles = {
      leafletContainer: {
        width: '100%',
        height: 600,
      },
    }
    var PharmacieMapIcon = L.icon({
      iconUrl: 'https://s23.postimg.org/m6i58o9a3/farmacies.png',
    //iconSize: [80, 80],
    // iconAnchor: [38, 38],
    popupAnchor: [18, 0],
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
          {pharmacie.coordenates.lat.map((lat ,index)=>
            <div>
            <Marker icon={PharmacieMapIcon} position={[pharmacie.coordenates.lat[index], pharmacie.coordenates.lng[index]]}>
              <Popup>
                <span>Location. <br/>{pharmacie.name}</span>
              </Popup>
            </Marker>
            </div>
          )}
        </Map>
      </div>
    );
  }

}
