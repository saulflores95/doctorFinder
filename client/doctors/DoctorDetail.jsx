import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorHeader from './DoctorHeader.jsx';
import DoctorExp from './DoctorExp.jsx';
import DoctorContactForm from './DoctorContactForm.jsx';
import DoctorMap from '../maps/DoctorMap.jsx';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class DoctorDetail extends Component{
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
          <DoctorHeader id={this.props.id} />
          <DoctorContactForm id={this.props.id} />
          <DoctorMap id={this.props.id} />
        </Container>
        </div>

      )
  }
}
