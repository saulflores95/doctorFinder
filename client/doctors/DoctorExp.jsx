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
              <p className="doctor-exp">{doctor.curriculumOne}</p>
              <p className="doctor-exp">{doctor.curriculumTwo}</p>
              <p className="doctor-exp">{doctor.curriculumThree}</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <p className="doctor-exp">{doctor.curriculumFour}</p>
            <p className="doctor-exp">{doctor.curriculumFive}</p>
            <p className="doctor-exp">{doctor.curriculumSix}</p>
          </Col>
          </Row>
        </div>
      )
  }
}
