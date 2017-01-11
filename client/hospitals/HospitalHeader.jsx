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
            <img style={styles.img} src={hospital.img} />
            <h1>{hospital.name}</h1>
            <HospitalRaiting />
          </Col>
        </Row>
      </div>
    )
  }
}
