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
    };

    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div style={styles.experienceContainer}>
          <Row>
          <Col sm={4}>
              <h4>{doctor.curriculumOne}</h4>
              <h4>{doctor.curriculumTwo}</h4>
              <h4>{doctor.curriculumThree}</h4>
          </Col>
          <Col sm={4}>
            <h4>{doctor.curriculumFour}</h4>
            <h4>{doctor.curriculumFive}</h4>
            <h4>{doctor.curriculumSix}</h4>
          </Col>
          </Row>
        </div>
      )
  }
}
