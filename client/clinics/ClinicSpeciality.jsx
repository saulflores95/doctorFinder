import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class ClinicSpeciality extends Component{
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
    var styles = {
      experienceContainer:{
        height:'100%',
      },
    };

    if(!clinic){
      return(<div>Loading...</div>);
    }
      return(
        <div style={styles.experienceContainer}>
          <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
              <h4>{clinic.specificOne}</h4>
              <h4>{clinic.specificTwo}</h4>
              <h4>{clinic.specificThree}</h4>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <h4>{clinic.specificFour}</h4>
            <h4>{clinic.specificFive}</h4>
            <h4>{clinic.specificSix}</h4>
          </Col>
          </Row>
        </div>
      )
  }
}
