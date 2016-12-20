import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import PharmacieList from './PharmacieList.jsx';
import PharmacieHeader from './PharmacieHeader.jsx';
import PharmacieMap from '../maps/PharmacieMap.jsx';

export default class PharmacieDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    }
  }

  pharmacie(){
    return Pharmacies.findOne(this.props.id);
  }


  render(){
    let pharmacie = this.pharmacie();

    if(!pharmacie){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div>
            <Container>
              <Row>
              <Col xs={12} sm={12} md={12} lg={12}><PharmacieHeader id={this.props.id}/></Col>
              <Col xs={12} sm={12} md={12} lg={12}> <PharmacieMap id={this.props.id} /></Col>
              </Row>
            </Container>
          </div>
    )
  }
}
