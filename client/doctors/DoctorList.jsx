import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class DoctorList extends Component {

toggleChecked(){
  Meteor.call('toggleDoctor', this.props.doctor);
}

deleteDoctor(){
  Meteor.call('deleteDoctor', this.props.doctor);
}


  render(){

    return(
      <div>
      <MuiThemeProvider>
          <List>
            <ListItem
              leftAvatar={<Avatar src={this.props.doctor.img}/>}
              rightIcon={<ActionInfo onClick={this.deleteDoctor.bind(this)}/>}
              primaryText={this.props.doctor.name}
              href={`/doctors/${this.props.doctor._id}`}
              />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
