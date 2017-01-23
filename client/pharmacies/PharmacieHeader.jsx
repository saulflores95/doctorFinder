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
        width:  200,
        height: 200
      },
      container: {
        marginTop: 30,
        paddingBottom: 40,
      },
    }
    return(
      <div style={styles.container}>
        <Row>
          <Col sm={6} md={6} lg={8}>
            <img className="img-clinic" src={pharmacie.img} />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <h1 className="detail-name">{pharmacie.name}</h1>
            <div className="raiting-star"><PharmacieRaiting /></div>
          </Col>
        </Row>
      </div>
    )
  }
}
