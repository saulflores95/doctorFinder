import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

export default class DoctorAppointment extends Component {

  render(){
    const styles = {
      'padding-bottom':'0',
    };
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <DatePicker hintText={<span className="label-text">Set appointment </span>}/>
        </div>
      </MuiThemeProvider>
    )
  }

}
