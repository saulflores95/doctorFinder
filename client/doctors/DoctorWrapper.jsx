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

  componentWillUnmount(){
    this.state.subscription.doctors.stop();
  }

  doctors(){
    return Doctors.find().fetch();
  }

  render(){
    let filteredDoctors = this.doctors().filter(
      (doctor) => {
        return doctor.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    const styles = {
      input: {
        transition: '1s',
        marginTop: '10px',
        width: '85px',
        border: '0',
        outline: '0',
        borderBottom: '2px solid black',
        fontSize: '16px',
        backgroundColor: 'white',
        backgroundImage: "url('http://www.scienceclass411.com/images/stylistica-icons-set/png/32x32/search.png')",
        backgroundPosition: '4px 4px',
        padding: '12px 12px 12px 40px',
        backgroundRepeat: 'no-repeat',
        ':focus': {
          width: '200px',
          ':hover': {
                  }
        }
      }
    }
    return (
      <div style={styles.doctorList}>
            {filteredDoctors.map((doctor)=>{
              return <DoctorList key={doctor._id} doctor={doctor} />
            })}

            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              onClick={this.updatePlaceholder.bind(this)}
              onBlur={this.updatePlaceholder2.bind(this)}
              style={styles.input}
              placeholder={this.state.placeholder}
              ref="searchbar"
              />
      </div>

    )
  }
}
module.exports = Radium(DoctorWrapper);
