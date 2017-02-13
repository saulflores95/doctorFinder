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
        height: '100px'
      }
    }
    return(
      <div>
      <MuiThemeProvider>
          <List>
              <ListItem
              leftAvatar={<Avatar className="img-pharmacieSingle" src={this.props.pharmacie.img}/>}
              rightIcon={<ActionInfo className="icon-pharmacie"/>}
              href={`/pharmacies/${this.props.name}/${this.props.pharmacie._id}`}
              primaryText={<div className="pharmacie-primaryText">{this.props.pharmacie.name}</div>}
              className="pharmacieList-item"
            />
            <Divider inset={true} />
          </List>
      </MuiThemeProvider>
      </div>

    )
  }
}