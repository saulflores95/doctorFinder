import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'

import styles from './DoctorAppointment.css'

const DoctorAppointment = () => {
  return (
    <MuiThemeProvider>
      <div>
        <DatePicker hintText={<span> Set appointment </span>}/>
      </div>
    </MuiThemeProvider>
  );
}

export default DoctorAppointment
