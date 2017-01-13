import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';


export default class PharmacieGeneralMap extends Component {

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
    return Pharmacies.find({tag: this.props.name}).fetch();
  }

  render() {
    let pharmacies = this.pharmacies();
    const positionState = [this.state.lat, this.state.lng];

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
        <Map center={positionState} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
            <div>
            {this.pharmacies().map((pharmacie)=>{
              return(
                <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
                  <Popup>
                    <span>Location. <br/>{pharmacie.name}</span>
                  </Popup>
                </Marker>
              )
            })}
            </div>
        </Map>
      </div>
    );
  }

}
