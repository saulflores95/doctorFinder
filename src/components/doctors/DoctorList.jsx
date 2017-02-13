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
        height: '180px'
      },
      svg: {
        height: '72px',
        width: '72px',
        '@media (max-width: 800px)': {
          height: '24px',
          width: '24px',
        },
      },
      img: {
        width: '120px',
        height: '120px'
      },

    }
    return(
      <div>
      <MuiThemeProvider>
          <List>
              <ListItem
              leftAvatar={<Avatar className="img-doctor"  src={this.props.doctor.img}/>}
              rightIcon={<ActionInfo className="img-svg" />}
              href={`/doctors/${this.props.doctor._id}`}
              secondaryText={<div className="secondaryText">{this.props.doctor.specialty}</div>}
              primaryText={<div className="primaryText">{this.props.doctor.name}</div>}
              className="img-item"
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
