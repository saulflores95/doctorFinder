import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import HospitalList from './HospitalList.jsx';
import {Container, Row } from 'react-grid-system';

Hospitals = new Mongo.Collection("hospitals");

export default class HospitalWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        hospitals: Meteor.subscribe("allHospitals")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.hospitals.stop();
  }

  hospitals(){
    return Hospitals.find().fetch();
  }


  render(){

    return (
        <div>
          <Container>
            <Row>
              {this.hospitals().map((hospital)=>{
                return <HospitalList key={hospital._id} hospital={hospital} />
            })}
            </Row>
          </Container>
        </div>
      )
    }
  }
