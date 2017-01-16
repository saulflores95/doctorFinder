import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';


export default class LabGeneralMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        labs: Meteor.subscribe("allLabs")
      }
    };
  }

  componentWillUnmount(){
    this.state.subscription.labs.stop();
  }

  labs(){
    return Labs.find({tag: this.props.name}).fetch();
  }

  render() {
    let labs = this.labs();
    const positionState = [this.state.lat, this.state.lng];

    const styles = {
      leafletContainer: {
        width: '100%',
        height: 600,
      },
    }
    var LabMapIcon = L.icon({
      iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
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
            {this.labs().map((lab)=>{
              return(
                <Marker icon={LabMapIcon} position={[lab.latitude, lab.longitude]}>
                  <Popup>
                    <span>Location. <br/>{lab.name}</span>
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
