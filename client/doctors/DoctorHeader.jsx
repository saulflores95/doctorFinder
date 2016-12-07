import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorExp from './DoctorExp.jsx';
import DoctorAppointment from './DoctorAppointment.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

export default class DoctorHeader extends Component{
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
    var imgUrl = 'http://photos.wikimapia.org/p/00/00/57/98/94_big.jpg';
    var styles = {
      DoctorHeaderContainer:{
        height:150,
        paddingTop:55,
        paddingBottom:100,
      },
     doctorImg: {
      'border-radius': '50%',
      'height': '150',
      'width':'150',
    },
  }


    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div>
          <MuiThemeProvider>
              <div style={styles.DoctorHeaderContainer}>
                <Container>
                <Row>
                  <Col sm={4}>
                    <img style={styles.doctorImg} src={doctor.img} />
                    <h1>{doctor.name}</h1>
                    <DoctorAppointment id={this.props.id} />
                    <FlatButton
                      label="6218302"
                      labelPosition="before"
                      href="tel:+900300400"
                      primary={true}
                      icon={<ActionAndroid />}
                    />
                  </Col>
                  <Col sm={4}>
                    <DoctorExp id={this.props.id} />
                  </Col>
                </Row>
                </Container>
              </div>
          </MuiThemeProvider>
        </div>
      )
  }
}
