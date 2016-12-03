import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

export default class DoctorAppointment extends Component {

  render(){

    return (
      <MuiThemeProvider>
        <DatePicker hintText="Set appointment" mode="landscape" />
      </MuiThemeProvider>
    )
  }

}
