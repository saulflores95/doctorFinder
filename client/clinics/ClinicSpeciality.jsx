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
      expText:{
        'font-size': 'x-large',
        'fontWeight': 100,
      }
    };

    if(!clinic){
      return(<div>Loading...</div>);
    }
      return(
        <div style={styles.experienceContainer}>
          <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
              <p className="detail-text">{clinic.specificOne}</p>
              <p className="detail-text">{clinic.specificTwo}</p>
              <p className="detail-text">{clinic.specificThree}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <p className="detail-text">{clinic.specificFour}</p>
            <p className="detail-text">{clinic.specificFive}</p>
            <p className="detail-text">{clinic.specificSix}</p>
          </Col>
          </Row>
        </div>
      )
  }
}
