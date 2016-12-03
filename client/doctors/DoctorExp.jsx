import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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
    var imgUrl = 'http://photos.wikimapia.org/p/00/00/57/98/94_big.jpg';
    var backgroundImg = {
      'background': 'url('+ imgUrl + ') no-repeat center center fixed',
      '-webkit-background-size': '350',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
    };

    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div style={backgroundImg}>
          <h3>{doctor.curriculumOne}</h3>
          <h3>{doctor.curriculumTwo}</h3>
          <h3>{doctor.curriculumThree}</h3>
          <h3>{doctor.curriculumFour}</h3>
          <h3>{doctor.curriculumFive}</h3>
        </div>
      )
  }
}
