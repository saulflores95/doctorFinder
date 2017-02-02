import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Control from 'react-leaflet-control';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Geolocation } from 'meteor/mdg:geolocation';

export default class GeneralMap extends TrackerReact(Component) {

  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      latitude:32.50504,
      longitude:-116.99056,
      zoom: 15,
      open: false,
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies"),
        hospitals: Meteor.subscribe("allHospitals"),
        clinics: Meteor.subscribe("allClinics"),
        doctors: Meteor.subscribe("allDoctors"),
        labs: Meteor.subscribe("allLabs")
      },
      showPharmacies:true,
      showHospitals:true,
      showDoctors:true,
      showClinics:true,
      showLabs:true,
    };
  }

 componentWillUnmount(){
    this.state.subscription.pharmacies.stop();
    this.state.subscription.hospitals.stop();
    this.state.subscription.clinics.stop();
    this.state.subscription.doctors.stop();
    this.state.subscription.labs.stop();

  }

  pharmacies(){
    return Pharmacies.find().fetch();
  }

  handlePharmacies(){
    if(this.state.showPharmacies === true){
      var PharmacieMapIcon = L.icon({
        iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
        //iconSize: [80, 80],
        // iconAnchor: [38, 38],
        popupAnchor: [18, 0],
        //  shadowUrl: '',
        //  shadowSize: [68, 95],
        //  shadowAnchor: [22, 94]
      });
      return(
        <div>
          {this.pharmacies().map((pharmacie)=>{
            return(
              <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
                <Popup>
                  <span> <br/>{pharmacie.name}</span>
                </Popup>
              </Marker>
            )
          })}
        </div>
      )
    }
  }

  hospitals(){
    return Hospitals.find().fetch();
  }

  handleHospitals(){
    var hospitalMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/d819g8c0d/Hospitals.png',
      popupAnchor: [18, 0],
    });
    if(this.state.showHospitals === true){
      return(
        <div>
          {this.hospitals().map((hospital)=>{
            return(
              <Marker icon={hospitalMapIcon} position={[hospital.latitude, hospital.longitude]}>
                <Popup>
                  <span> <br/>{hospital.name}</span>
                </Popup>
              </Marker>
            )
          })}
        </div>
      )
    }
  }

  doctors(){
    return Doctors.find().fetch();
  }

  handleDoctors(){
    var DoctorMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
      //iconSize: [80, 80],
      // iconAnchor: [38, 38],
      popupAnchor: [18, 0],
      //  shadowUrl: '',
      //  shadowSize: [68, 95],
      //  shadowAnchor: [22, 94]
    });
    if(this.state.showDoctors === true){
      return(
        <div>
          {this.doctors().map((doctor)=>{
            return(
              <Marker icon={DoctorMapIcon} position={[doctor.latitude, doctor.longitude]}>
                <Popup>
                  <span><br/>{doctor.name}</span>
                </Popup>
              </Marker>
            )
          })}
        </div>
      )
    }
  }

  clinics(){
    return Clinics.find().fetch();
  }

  handleClinics(){
    var clinicMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
      popupAnchor: [18, 0],
    });
    if(this.state.showClinics === true){
      return(
        <div>
          {this.clinics().map((clinic)=>{
            return(
              <Marker icon={clinicMapIcon} position={[clinic.latitude, clinic.longitude]}>
                <Popup>
                  <span> <br/>{clinic.name}</span>
                </Popup>
              </Marker>
            )
          })}
        </div>
      )
    }
  }

  labs(){
    return Labs.find().fetch();
  }

  handleLabs(){
    var labMapIcon = L.icon({
      iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
      popupAnchor: [18, 0],
    });
    if(this.state.showClinics === true){
      return(
        <div>
        {this.labs().map((lab)=>{
          return(
            <Marker icon={labMapIcon} position={[lab.latitude, lab.longitude]}>
              <Popup>
                <span><br/>{lab.name}</span>
              </Popup>
            </Marker>
          )
        })}
        </div>
      )
    }
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
      this.setState({open: false});
  }

  toogle(value){
    if(value === 'doctors'){
      if(this.state.showDoctors === true){
        this.setState({
          showDoctors: false
        });
        Bert.alert( 'Doctos Disabled!', 'warning', 'growl-top-left' );
      }else{
        this.setState({
          showDoctors:true
        });
      }
    }else if(value === 'pharmacies'){
      if(this.state.showPharmacies === true){
        this.setState({
          showPharmacies: false
        });
        Bert.alert( 'Pharmacies Disabled!', 'warning', 'growl-top-left' );
      }else{
        this.setState({
          showPharmacies:true
        });
      }
    }else if(value === 'clinics'){
      if(this.state.showClinics === true){
        this.setState({
          showClinics: false
        });
        Bert.alert( 'Clinics Disabled!', 'warning', 'growl-top-left' );

      }else{
        this.setState({
          showClinics:true
        });
      }
    }else if(value === 'labs'){
      if(this.state.showLabs === true){
        this.setState({
          showLabs:false
        });
        Bert.alert( 'Labs Disabled!', 'warning', 'growl-top-left' );
      }else{
        this.setState({
          showLabs:true
        });
      }
    }else if(value === 'hospitals'){
      if(this.state.showHospitals === true){
        this.setState({
          showHospitals:false
        });
        Bert.alert( 'Hospitals Disabled!', 'warning', 'growl-top-left' );
      }else{
        this.setState({
          showHospitals:true
        });
      }
    }else{
      console.log('Not Working: ', value);
    }
}


  render() {
    const userPosition = [this.state.lat, this.state.lng];
    var handlePharmacies = this.handlePharmacies();
    var handleDoctors = this.handleDoctors();
    var handleHospitals = this.handleHospitals();
    var handleClinics = this.handleClinics();
    var handleLabs = this.handleLabs();
    var UserIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.0.1/dist/images/marker-icon-2x.png',
      // iconAnchor: [38, 38],
      popupAnchor: [0, -18],
      iconSize:[25,41]
      //  shadowUrl: '',
      //  shadowSize: [68, 95],
      //  shadowAnchor: [22, 94]
    });
    var mapCenter = [this.state.latitude, this.state.longitude]
    const styles = {
      leafletContainer: {
        width: '100%',
        height: '80vh',
        paddingTop: 50
      },
    }

    return (
      <div className="generalMap-container">
        <Map center={mapCenter} zoom={this.state.zoom}>
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
              {handlePharmacies}
            </div>
            <div>
              {handleClinics}
            </div>
            <div>
              {handleHospitals}
            </div>
            <div>
              {handleLabs}
            </div>
            <div>
              {handleDoctors}
            </div>
            <div>
            <Marker icon={UserIcon} position={Geolocation.latLng()}>
              <Popup>
                <span> <br/>This is you</span>
              </Popup>
            </Marker>
            </div>
        </Map>
        <MuiThemeProvider>
        <div>
          <Drawer
            open={this.state.open}
            docked={false}
            className="sidenav"
            onRequestChange={(open) => this.setState({open})}>
            <MenuItem onClick={() => this.toogle('doctors')} >
              <h3>Doctors </h3>
            </MenuItem>
            <MenuItem onClick={() => this.toogle('pharmacies')} >
              <h3>Pharmacies </h3>
            </MenuItem>
            <MenuItem onClick={() => this.toogle('clinics')} >
              <h3>Clinics </h3>
            </MenuItem>
            <MenuItem onClick={() => this.toogle('labs')} >
              <h3>Laboratories </h3>
            </MenuItem>
            <MenuItem onClick={() => this.toogle('hospitals')} >
              <h3>Hospitals </h3>
            </MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }

}
