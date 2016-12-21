import React, {Component} from 'react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PharmacieRaiting from './PharmacieRaiting.jsx';
import {Row, Col, Visible, Hidden } from 'react-grid-system';



export default class PharmacieHeader extends Component {
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allClinics")
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

    var styles = {
      img: {
        width: '200px',
        height: '200px'
      },
      container: {
        marginTop: '30px',
      },
    }
    return(
      <div style={styles.container}>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <img style={styles.img} src={pharmacie.img} />
            <h1>{pharmacie.name}</h1>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <PharmacieRaiting />
          </Col>
          <Col sm={12} md={12} lg={6}>

          </Col>
        </Row>
      </div>
    )
  }
}
