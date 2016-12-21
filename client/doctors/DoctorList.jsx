import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import DoctorRaiting from './DoctorRaiting.jsx';

export default class DoctorList extends Component {

toggleChecked(){
  Meteor.call('toggleDoctor', this.props.doctor);
}

deleteDoctor(){
  Meteor.call('deleteDoctor', this.props.doctor);
}


  render(){
    const styles = {
      ListItem:{
        color:'white',
      }
    }
    return(
      <div>
      <MuiThemeProvider>
          <List>
              <ListItem
              leftAvatar={<Avatar src={this.props.doctor.img}/>}
              rightIcon={<ActionInfo onClick={this.deleteDoctor.bind(this)}/>}
              href={`/doctors/${this.props.doctor._id}`}
              primaryText={this.props.doctor.name}
              secondaryText={this.props.doctor.specialty}
              style={styles.ListItem}
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
