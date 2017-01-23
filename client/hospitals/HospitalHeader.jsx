import React, {Component} from 'react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import HospitalRaiting from './HospitalRaiting.jsx';
import {Row, Col, Visible, Hidden } from 'react-grid-system';



export default class HospitalHeader extends Component {
  constructor(){
    super();

    this.state = {
      subscription: {
        hospitals: Meteor.subscribe("allHospitals")
      }
    }
  }

  hospital(){
    return Hospitals.findOne(this.props.id);
  }


  render(){
    let hospital = this.hospital();

    if(!hospital){
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
            <img className="img-clinic" src={hospital.img} />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <h1 className="detail-name">{hospital.name}</h1>
            <div className="raiting-star"><HospitalRaiting /></div>
          </Col>
        </Row>
      </div>
    )
  }
}
