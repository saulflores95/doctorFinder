import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class GeneralMap extends TrackerReact(Component) {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies"),
        hospitals: Meteor.subscribe("allHospitals"),
        clinics: Meteor.subscribe("allClinics"),
        doctors: Meteor.subscribe("allDoctors")
      }
    };
  }

  componentWillUnmount(){
    this.state.subscription.pharmacies.stop();
    this.state.subscription.hospitals.stop();
    this.state.subscription.clinics.stop();
    this.state.subscription.doctors.stop();

  }

  pharmacies(){
    return Pharmacies.find().fetch();
  }

  hospitals(){
    return Hospitals.find().fetch();
  }

  doctors(){
    return Doctors.find().fetch();
  }

  clinics(){
    return Clinics.find().fetch();
  }

  render() {
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
    var clinicMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
      popupAnchor: [18, 0],
    });
    var DoctorMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
      //iconSize: [80, 80],
      // iconAnchor: [38, 38],
      popupAnchor: [18, 0],
      //  shadowUrl: '',
      //  shadowSize: [68, 95],
      //  shadowAnchor: [22, 94]
    });
    var hospitalMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/d819g8c0d/Hospitals.png',
      popupAnchor: [18, 0],
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
            <div>
            {this.hospitals().map((hospital)=>{
              return(
                <Marker icon={hospitalMapIcon} position={[hospital.latitude, hospital.longitude]}>
                  <Popup>
                    <span>Location. <br/>{hospital.name}</span>
                  </Popup>
                </Marker>
              )
            })}
            </div>
            <div>
            {this.clinics().map((clinic)=>{
              return(
                <Marker icon={clinicMapIcon} position={[clinic.latitude, clinic.longitude]}>
                  <Popup>
                    <span>Location. <br/>{clinic.name}</span>
                  </Popup>
                </Marker>
              )
            })}
            </div>
            <div>
            {this.doctors().map((doctor)=>{
              return(
                <Marker icon={DoctorMapIcon} position={[doctor.latitude, doctor.longitude]}>
                  <Popup>
                    <span>Location. <br/>{doctor.name}</span>
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
