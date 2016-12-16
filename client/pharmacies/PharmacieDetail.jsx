import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import PharmacieList from './PharmacieList.jsx';
import PharmacieHeader from './PharmacieHeader.jsx';

export default class PharmacieDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
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
                <PharmacieHeader />
              </Row>
            </Container>
          </div>
    )
  }
}
