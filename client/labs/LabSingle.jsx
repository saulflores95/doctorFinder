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
              leftAvatar={<Avatar className="img-pharmacieSingle" src={this.props.lab.img}/>}
              rightIcon={<ActionInfo className="icon-pharmacie"/>}
              href={`/laboratories/${this.props.name}/${this.props.lab._id}`}
              primaryText={<div className="pharmacie-primaryText">{this.props.lab.name}</div>}
              className="pharmacieList-item"
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}
