import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class LabSingle extends Component {



deleteDoctor(){
  Meteor.call('deleteDoctor', this.props.lab);
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
              leftAvatar={<Avatar src={this.props.lab.img}/>}
              rightIcon={<ActionInfo />}
              href={`/laboratories/${this.props.name}/${this.props.lab._id}`}
              primaryText={this.props.lab.name}
              style={styles.ListItem}
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
