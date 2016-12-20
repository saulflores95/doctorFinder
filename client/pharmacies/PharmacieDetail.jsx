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
                <Col sm={6} md={6} lg={6}>
                  <h1>{pharmacie.name}</h1>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  {pharmacie.coordenates.lat.map((lat ,index)=>
                    <div>
                      <h1>latitude: {pharmacie.coordenates.lat[index]}</h1>
                      <h1>Longitude: {pharmacie.coordenates.lng[index]}</h1>
                    </div>
                  )}
                </Col>
                <PharmacieMap id={this.props.id} />
              </Row>
            </Container>
          </div>
    )
  }
}
