import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorHeader from './DoctorHeader.jsx';
import DoctorExp from './DoctorExp.jsx';
import DoctorContactForm from './DoctorContactForm.jsx';
import DoctorMap from '../maps/DoctorMap.jsx';
import DoctorDescription from './DoctorDescription.jsx';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import DoctorEditForm from './DoctorEditForm.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DoctorDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("allDoctors")
      },
    }
  }

  doctor(){
    return Doctors.findOne(this.props.id);
  }

  delete(event){
    event.preventDefault();
    if(Meteor.userId()){
      Meteor.call('deleteDoctor', this.doctor(), (error, data) => {
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-left' );
        }else{
          Bert.alert('Doctor Eliminated', 'danger', 'fixed-top');
        }
      });
    }
  }

  render(){
    let doctor = this.doctor();
    const styles = {
      divContainer:{
        'paddingBottom':'100',
      },
    }
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
            label={<span className="label-text">Edit Doctor</span>}
            primary={false}
            href={`/doctors/${this.props.id}/edit`}
          />
          <RaisedButton
            label={<span className="label-text">Delete Doctor</span>}
            primary={false}
            onClick={this.delete.bind(this)}
          />
        </div>
      );
    }

    if(!doctor){
      return(<div><LoadingComponent /></div>);
    }

      return(
        <div style={styles.divContainer}>
        <MuiThemeProvider>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}><DoctorHeader id={this.props.id} /></Col>
              <Col xs={12} sm={12} md={12} lg={12}><DoctorDescription id={this.props.id} /></Col>
              <Col xs={12} sm={12} md={12} lg={6}><DoctorContactForm id={this.props.id} /></Col>
              <Col xs={12} sm={12} md={12} lg={6}><DoctorMap id={this.props.id} /></Col>
              <Col xs={11} sm={11} md={11} lg={5}>
                {userChecker}
              </Col>

            </Row>
          </Container>
          </MuiThemeProvider>
        </div>

      )
  }
}
