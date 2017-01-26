import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorExp from './DoctorExp.jsx';
import DoctorAppointment from './DoctorAppointment.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Row, Col, Visible, Hidden } from 'react-grid-system';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import DoctorRaiting from './DoctorRaiting.jsx';
import Divider from 'material-ui/Divider';

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
        'height':200,
        'paddingTop':75,
        'paddingBottom':75,
        'font-family': 'Roboto',
        'color':'white',
      },
      h1:{
        'font-weight': 'bold',
        'font-size':'larger',
      },
     doctorImg: {
      'border-radius': '50%',
      'height': '175',
      'width':'150',
    },
    specialtyText:{
      'font-weight': 100,
      'font-size': 'larger',
    },
    divider:{
      'paddingTop': 25,
    }
  }


    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div>
        <MuiThemeProvider>
            <div style={styles.DoctorHeaderContainer}>
              <Row>
                <Col sm={6} md={6} lg={2}>
                  <img className="img-doctorHeader" src={doctor.img} />
                </Col>
                <Col sm={6} md={6} lg={5}>
                  <h1 className="detail-name">{doctor.name}</h1>
                  <span className="detail-name">{doctor.specialty}</span>
                  <div className="raiting-star"><DoctorRaiting /></div>
                  <DoctorAppointment id={this.props.id} />
                </Col>
                <Col sm={12} md={12} lg={5}>
                  <DoctorExp id={this.props.id} />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <div style={styles.divider}>
                    <Divider />
                  </div>
                </Col>
              </Row>
            </div>
        </MuiThemeProvider>
        </div>
      )
  }
}
