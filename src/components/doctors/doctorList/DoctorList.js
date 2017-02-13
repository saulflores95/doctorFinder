import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'

import DoctorRaiting from './DoctorRaiting.jsx'
import styles from './DoctorList.css'

const DoctorList = (props) => {
  return(
    <div>
      <MuiThemeProvider>
        <List>
          <ListItem
          leftAvatar={<Avatar className={styles.imgDoctor}  src={props.doctor.img}/>}
          rightIcon={<ActionInfo className={styles.svg} />}
          href={`/doctors/${props.doctor._id}`}
          secondaryText={<div className={styles.text}>{props.doctor.specialty}</div>}
          primaryText={<div className={styles.text}>{props.doctor.name}</div>}
          className={styles.imgItem}
          />
          <Divider inset={true} />
        </List>
      </MuiThemeProvider>
    </div>
  );
}

export default DoctorList
