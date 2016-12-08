import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorHeader from './DoctorHeader.jsx';
import DoctorExp from './DoctorExp.jsx';
import DoctorContactForm from './DoctorContactForm.jsx';
import DoctorMap from '../maps/DoctorMap.jsx';
import DoctorDescription from './DoctorDescription.jsx';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class DoctorDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("userDoctors")
      }
    }
  }

  doctor(){
    return Doctors.findOne(this.props.id);
  }


  render(){
    let doctor = this.doctor();
    if(!doctor){
      return(<div>Loading...</div>);
    }

      return(
        <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}><DoctorHeader id={this.props.id} /></Col>
            <Col xs={12} sm={12} md={12} lg={12}><DoctorDescription id={this.props.id} /></Col>
            <Col xs={12} sm={6} md={6} lg={6}><DoctorContactForm id={this.props.id} /></Col>
            <Col xs={12} sm={6} md={6} lg={6}><DoctorMap id={this.props.id} /></Col>
          </Row>
        </Container>
        </div>

      )
  }
}
