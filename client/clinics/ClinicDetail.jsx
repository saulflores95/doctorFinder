import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ClinicList from './ClinicList.jsx';
import ClinicHeader from './ClinicHeader.jsx';

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


  render(){
    let clinic = this.clinic();

    if(!clinic){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div>
            <Container>
              <Row>
                <ClinicHeader />
              </Row>
            </Container>
          </div>
    )
  }
}
