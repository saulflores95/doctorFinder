import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class PharmacieSingle extends Component {

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
              leftAvatar={<Avatar src={this.props.pharmacie.img}/>}
              rightIcon={<ActionInfo />}
              href={`/pharmacies/${this.props.name}/${this.props.pharmacie._id}`}
              primaryText={this.props.pharmacie.name}
              style={styles.ListItem}
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
