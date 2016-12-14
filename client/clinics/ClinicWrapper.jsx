import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ClinicList from './ClinicList.jsx';
import {Container, Row } from 'react-grid-system';

Clinics = new Mongo.Collection("clinics");

export default class ClinicWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        clinics: Meteor.subscribe("allClinics")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.clinics.stop();
  }

  clinics(){
    return Clinics.find().fetch();
  }


  render(){

    return (
      <div>
        <Container>
          <Row>
            {this.clinics().map((clinic)=>{
              return <ClinicList key={clinic._id} clinic={clinic} />
          })}
          </Row>
        </Container>
      </div>


    )
  }
}
