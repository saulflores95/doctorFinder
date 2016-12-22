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
    const styles = {
      container: {
        height:200,
        paddingTop:35,
        paddingBottom:74,
        color:'white',
        fontFamily:'Roboto',
      }
    }

    if(!pharmacie){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div style={styles.container}>
            <Container>
              <Row>
                <Col xs={6} sm={6} md={4} lg={4}><PharmacieHeader id={this.props.id}/></Col>
                <Col xs={6} sm={6} md={8} lg={8}> <PharmacieMap id={this.props.id} /></Col>
              </Row>
            </Container>
          </div>
    )
  }
}
