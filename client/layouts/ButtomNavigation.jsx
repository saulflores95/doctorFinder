import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radium from 'radium';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ContentPaste from 'material-ui/svg-icons/content/content-paste'
import LocalHospital from 'material-ui/svg-icons/maps/local-hospital';
import Assignment from 'material-ui/svg-icons/action/assignment';
import FaHospitalO from 'react-icons/lib/fa/hospital-o';
import FaHeartbeat from 'react-icons/lib/fa/heartbeat';
import FaPlusSquare from 'react-icons/lib/fa/plus-square';
import FaFlask from 'react-icons/lib/fa/flask';
import FaUserMd from 'react-icons/lib/fa/user-md';

const assignment = <Assignment />;
const doctorIcon = <LocalHospital />;
const registerIcon = <ContentPaste />;
const nearbyIcon = <IconLocationOn />;

const styles = {
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    zIndex: '1000',
    height: '120px'

  },
  icon: {
    textAlign: 'center',
    fontSize: '72px'
  },
  img: {
    height: '72px'
  },
  bottom: {
    height: '120px'
  },
  bottomNavItem: {
    maxWidth: '96dp',
    minWidth: '56dp'
  }

};

export default class ButtomNavigation extends Component{
  constructor(){
    super();

    this.state = {
      selectedIndex: 0,
    }
  }

  select(index){
    return this.setState({selectedIndex: index});
  }

  render() {
    return (

      <div>
        <MuiThemeProvider>
          <BottomNavigation selectedIndex={this.state.selectedIndex} className="bottom">
            <BottomNavigationItem
              icon={<FaUserMd className="icon-pixel"/>}
              onTouchTap={() => this.select(0)}
              href="/"
              style={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaHeartbeat className="icon-pixel"/>}
              onTouchTap={() => this.select(1)}
              href="/clinics"
              style={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaPlusSquare className="icon-pixel"/>}
              onTouchTap={() => this.select(2)}
              href="/pharmacies"
              style={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaHospitalO className="icon-pixel"/>}
              onTouchTap={() => this.select(3)}
              href="/hospitals"
              style={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaFlask className="icon-pixel"/>}
              onTouchTap={() => this.select(4)}
              href="/laboratories"
              style={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<IconLocationOn className="icon-pixel"/>}
              onTouchTap={() => this.select(5)}
              href="/map"
              style={styles.bottomNavItem}
            />
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    );
  }
}
module.exports = Radium(ButtomNavigation);
