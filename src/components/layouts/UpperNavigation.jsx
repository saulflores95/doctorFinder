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
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';


export default class UpperNavigation extends Component{

  render(){
    const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg';
    const styles = {
      header: {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        zIndex: '1000',
      },
      icon: {
        marginTop: '11px'
      },
      AppBar:{
        backgroundColor: 'white',
        height: '120px'
      },
      iconMenu:{
        color: 'rgb(0, 188, 212)',
      },
      img: {
        height: '100px'
      },
      leftIcon: {
        height: '72px',
        width: '72px'
      },
      iconMenu: {
        left: '0px !important',
      }
    };


    return(
      <div style={styles.header}>
        <MuiThemeProvider>
          <AppBar
            title=""
            className="app-bar"
            iconElementLeft={<a href="/"><img className="img-logo" src={imgUrl} /></a>}
            iconElementRight={
              <IconMenu
                iconButtonElement={<MoreVertIcon className="left-icon"/>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                style={styles.iconMenu}
              >
                <AccountsUI />
                <MenuItem className="menu-item" href="/registermd" primaryText="Add Doctor" />
                <MenuItem className="menu-item" href="/pharmaciesRegistration" primaryText="Add Pharmacie" />
                <MenuItem className="menu-item" href="/registerClinic" primaryText="Add Clinic" />
                <MenuItem className="menu-item" href="/HospitalRegistration" primaryText="Add Hospital" />
                <MenuItem className="menu-item" href="/laboratoriesRegistration" primaryText="Add Laboratory" />

              </IconMenu>
            }
          />
        </MuiThemeProvider>
      </div>
    )
  }
}
