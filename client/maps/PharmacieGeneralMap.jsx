import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import Control from 'react-leaflet-control';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PharmacieSingleList from '../pharmacies/PharmacieSingleList.jsx';

export default class PharmacieGeneralMap extends Component {

  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      open: false,
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

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
      this.setState({open: false});
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
      iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
    //iconSize: [80, 80],
    // iconAnchor: [38, 38],
    popupAnchor: [18, 0],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });

    return (
      <div className="generalMap-container">
        <Map center={positionState} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Control position="topleft">
            <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={this.handleToggle}>
              <ContentAdd />
            </FloatingActionButton>
            </MuiThemeProvider>
          </Control>
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
        <MuiThemeProvider>
        <div style={styles.sideNav}>
          <Drawer
            open={this.state.open}
            docked={false}
            width={600}
            onRequestChange={(open) => this.setState({open})}>
            <MenuItem onClick={this.handleClose}>
              <PharmacieSingleList name={this.props.name} />
            </MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }

}
