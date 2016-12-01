import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const styles = {};

export default class UpperNavigation extends Component{

  constructor() {
    super();
  }


  render(){
    return(
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Healthcare Baja"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
