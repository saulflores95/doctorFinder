import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AccountsUI from '../AccountsUI.jsx';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';


export default class UpperNavigation extends Component{

  render(){
    const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg';
    const styles = {
      header: {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        zIndex: '1000'
      },
      icon: {
        marginTop: '11px'
      },
      AppBar:{
        backgroundColor: 'white',
      },
      iconMenu:{
        color: 'rgb(0, 188, 212)',
      },
    };


    return(
      <div style={styles.header}>
        <MuiThemeProvider>
          <AppBar
            title=""
            style={styles.AppBar}
            iconElementLeft={<img src={imgUrl}/>}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon color="red" /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <AccountsUI />
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
              </IconMenu>
            }
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
