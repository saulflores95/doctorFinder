import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import HospitalList from './HospitalList.jsx';
import HospitalHeader from './HospitalHeader.jsx';
import HospitalMap from '../maps/HospitalMap.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class HospitalDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        hospitals: Meteor.subscribe("allHospitals")
      }
    }
  }

  hospital(){
    return Hospitals.findOne(this.props.id);
  }


  delete(event){
    event.preventDefault();
    if(Meteor.userId()){
      Meteor.call('deleteHospital', this.hospital(), (error, data) => {
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-left' );
        }else{
          Bert.alert('Hospital Eliminated', 'danger', 'fixed-top');
        }
      });
    }
  }


  render(){
    let hospital = this.hospital
    var userChecker = null;
    if(!Meteor.userId()){
      userChecker = (
        <div>
          <h1>Log In to edit doctor</h1>
        </div>
      );
    }else {
      userChecker = (
        <div>
          <RaisedButton
            label={<span className="label-text">Edit Hospital</span>}
            labelPosition="before"
            primary={false}
            href={`/hospitals/${this.props.id}/edit`}
          />
          <RaisedButton
            label={<span className="label-text">Delete Hospital</span>}
            labelPosition="before"
            primary={false}
            onClick={this.delete.bind(this)}
          />
        </div>
      );
    }

    const styles = {
      container: {
        height:200,
        paddingTop:55,
        paddingBottom:74,
        color:'white',
        fontFamily:'Roboto',
      }
    }

    if(!hospital){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div className="component-detail">
          <MuiThemeProvider>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={12} lg={6}><HospitalHeader id={this.props.id}/></Col>
                <Col xs={12} sm={12} md={12} lg={12}> <HospitalMap id={this.props.id} /></Col>
                <Col xs={12} sm={12} md={12} lg={6}>{userChecker}</Col>
              </Row>
            </Container>
            </MuiThemeProvider>
          </div>
    )
  }
}
