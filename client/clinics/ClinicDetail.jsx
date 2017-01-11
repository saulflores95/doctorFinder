import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ClinicList from './ClinicList.jsx';
import ClinicHeader from './ClinicHeader.jsx';
import ClinicMap from '../maps/ClinicMap.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ClinicDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        clinics: Meteor.subscribe("allClinics")
      }
    }
  }

  clinic(){
    return Clinics.findOne(this.props.id);
  }

  delete(event){
    event.preventDefault();
    if(Meteor.userId()){
      Meteor.call('deleteClinic', this.clinic(), (error, data) => {
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
        }else{
          Bert.alert('Clinic Eliminated', 'danger', 'fixed-top');
        }
      });
    }
  }

  render(){
    let clinic = this.clinic();
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
            label="Edit Clinic"
            labelPosition="before"
            primary={false}
            href={`/clinics/${this.props.id}/edit`}
          />
          <RaisedButton
            label="Delete Clinic"
            labelPosition="before"
            primary={false}
            onClick={this.delete.bind(this)}
          />
        </div>
      );
    }


    if(!clinic){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div>
          <MuiThemeProvider>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}><ClinicHeader id={this.props.id}/></Col>
                <Col xs={12} sm={12} md={12} lg={12}><ClinicMap id={this.props.id}/></Col>
                <Col xs={12} sm={6} md={6} lg={6}>{userChecker}</Col>
              </Row>
            </Container>
            </MuiThemeProvider>
          </div>
    )
  }
}
