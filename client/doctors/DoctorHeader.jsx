import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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
    var backgroundImg = {
      'background': 'url('+ imgUrl + ') no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
    };
    var doctorImg = {
      'border-radius': '50%',
      'height': '100',
      'width':'100',
    };

    if(!doctor){
      return(<div>Loading...</div>);
    }
      return(
        <div style={backgroundImg}>
          <img style={doctorImg} src={doctor.img} />
          <h1>{doctor.name}</h1>
        </div>
      )
  }
}
