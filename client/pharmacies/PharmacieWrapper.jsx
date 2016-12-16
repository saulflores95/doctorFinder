import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PharmacieList from './PharmacieList.jsx';
import {Container, Row } from 'react-grid-system';

Pharmacies = new Mongo.Collection("pharmacies");

export default class PharmacieWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allpharmacies")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.clinics.stop();
  }

  pharmacies(){
    return Pharmacies.find().fetch();
  }


  render(){

    return (
        <div>
          <Container>
            <Row>
              {this.pharmacies().map((pharmacie)=>{
                return <PharmacieList key={pharmacie._id} pharmacie={pharmacie} />
            })}
            </Row>
          </Container>
        </div>
      )
    }
  }
