import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AccountsUI from '../AccountsUI.jsx';


const styles = {
  header: {
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    zIndex: '1000'
  }
};


export default class UpperNavigation extends Component{

  constructor() {
    super();
  }


  render(){
    return(
      <div style={styles.header}>
        <MuiThemeProvider>
          <AppBar
            title="Healthcare Baja"
            iconElementRight={<AccountsUI />}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
