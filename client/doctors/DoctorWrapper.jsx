import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorList from './DoctorList.jsx';


Doctors = new Mongo.Collection("doctors");

export default class DoctorWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("allDoctors")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.doctors.stop();
  }

  doctors(){
    return Doctors.find().fetch();
  }

  render(){
    const style = {
      doctorList: {
        "overflow":"scroll",
      }
    }
    return (
      <div styles={style.doctorList}>
            {this.doctors().map((doctor)=>{
              return <DoctorList key={doctor._id} doctor={doctor} />
            })}
      </div>

    )
  }
}
