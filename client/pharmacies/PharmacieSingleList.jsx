import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PharmacieSingle from './PharmacieSingle.jsx';

export default class PharmacieSingleList extends TrackerReact(Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    }
  }

  pharmacies(){
    return Pharmacies.find({tag: this.props.name}).fetch();
  }

  render() {
    let pharmacies = this.pharmacies();
    var styles = {
      container: {
        overflow: 'scroll',

      }
    }
    return(
          <div className="pharmacieSingle-container">
            {pharmacies.map((pharmacie)=>{
              return <PharmacieSingle name={this.props.name} pharmacie={pharmacie} />
            })}
          </div>
    )
  }
}
