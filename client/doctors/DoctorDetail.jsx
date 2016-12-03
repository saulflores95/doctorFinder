import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorHeader from './DoctorHeader.jsx';
import DoctorExp from './DoctorExp.jsx';

export default class DoctorDetail extends Component{
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
    if(!doctor){
      return(<div>Loading...</div>);
    }

      return(
        <div>
          <DoctorHeader id={this.props.id} />
          <DoctorExp id={this.props.id} />
        </div>
      )
  }
}
