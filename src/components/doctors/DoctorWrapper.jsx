import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DoctorList from './DoctorList.jsx';
import Radium from 'radium';

Doctors = new Mongo.Collection("doctors");

export default class DoctorWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("allDoctors")
      },
      search: '',
      placeholder: 'Search...'
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  updatePlaceholder(event) {
    this.setState({placeholder: ''})
  }

  updatePlaceholder2(event) {
    this.setState({placeholder: 'Search...'})
  }

  componentWillMount(){
    console.log('Service worker test');
    navigator.serviceWorker.register('../sw.js').then() .catch(error => console.log(error));
  }

  componentWillUnmount(){
    this.state.subscription.doctors.stop();
  }

  doctors(){
    return Doctors.find().fetch();
  }

  render(){
    var SpecialityDoctors = this.doctors().sort(function(a, b){
      if (a.specialty > b.specialty) {
        return 1;
      }
      if (a.specialty < b.specialty) {
        return -1;
      }
      return 0;
    });

    return (
      <div className="doctor-wrapper">
            {SpecialityDoctors.map((doctor)=>{
              return <DoctorList key={doctor._id} doctor={doctor} />
            })}
      </div>

    )
  }
}
module.exports = Radium(DoctorWrapper);
