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
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.pharmacies.stop();
  }

  pharmacies(){
    return Pharmacies.find().fetch();
  }

  pharmaciesList(){
    var arr = this.pharmacies().map((pharmacie) => {
      return pharmacie.tag;
    });
    console.log(arr);
    var uniqueArr = arr.filter(function(elem, index, self){
      return index == self.indexOf(elem);
    });
    console.log(uniqueArr);
    return uniqueArr;
  }




  render(){

    return (
        <div>
          <Container>
            <Row>
              {this.pharmaciesList().map((pharmacie)=>{
                return <PharmacieList key={pharmacie._id} pharmacie={pharmacie} />
            })}
            </Row>
          </Container>
        </div>
      )
    }
  }
