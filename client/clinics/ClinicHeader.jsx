import React, {Component} from 'react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ClinicRaiting from './ClinicRaiting.jsx';
import {Row, Col, Visible, Hidden } from 'react-grid-system';
import ClinicSpeciality from './ClinicSpeciality.jsx';


export default class ClinicHeader extends Component {
  constructor(){
    super();

    this.state = {
      subscription: {
        clinics: Meteor.subscribe("userClinics")
      }
    }
  }

  clinic(){
    return Clinics.findOne(this.props.id);
  }


  render(){
    let clinic = this.clinic();

    if(!clinic){
      return(<div><LoadingComponent /></div>);
    }

    var styles = {
      img: {
        width: '200px',
        height: '200px'
      },
      container: {
        'paddingTop':75,
        'paddingBottom':75,
        'height':200,
        'font-family': 'Roboto',
        'color':'white',
        'height':200,
      }
    }
    return(
      <div style={styles.container}>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <img style={styles.img} src={clinic.img} />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <h1>{clinic.name}</h1>
            <ClinicRaiting />
          </Col>
          <Col sm={12} md={12} lg={6}>
            <ClinicSpeciality id={this.props.id} />
          </Col>
        </Row>
      </div>
    )
  }
}
