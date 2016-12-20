import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class DoctorExp extends Component{
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("userDoctors")
      }
    }
  }


  doctor(){
    return Doctors.findOne(this.props.id);
  }


  render(){
    let doctor = this.doctor();
    var styles = {
      experienceContainer:{
        height:'100%',
      },
      expText:{
        'font-size': 'x-large',
        'fontWeight': 100,
      }
    };

    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div style={styles.experienceContainer}>
          <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
              <p style={styles.expText}>{doctor.curriculumOne}</p>
              <p style={styles.expText}>{doctor.curriculumTwo}</p>
              <p style={styles.expText}>{doctor.curriculumThree}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <p style={styles.expText}>{doctor.curriculumFour}</p>
            <p style={styles.expText}>{doctor.curriculumFive}</p>
            <p style={styles.expText}>{doctor.curriculumSix}</p>
          </Col>
          </Row>
        </div>
      )
  }
}
