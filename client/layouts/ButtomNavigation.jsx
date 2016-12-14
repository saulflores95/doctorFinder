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
import FaIconPack from 'react-icons/lib/fa'

const assignment = <Assignment />;
const doctorIcon = <LocalHospital />;
const registerIcon = <ContentPaste />;
const nearbyIcon = <IconLocationOn />;
const clinicIcon = <FontIcon className="fa fa-heartbeat"></FontIcon>
const hospitalIcon = <FontIcon className="fa fa-hospital-o"></FontIcon>


const styles = {
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    zIndex: '1000',
  //  '@media (max-width: 785px)': {
    //  height: '200px'
  //  },
  },
//  test2: {
  //  '@media (max-width: 785px)': {
  //    height: '200px'
    //},
  //},
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
      <div style={styles.footer}>
        <MuiThemeProvider>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>

              <BottomNavigationItem
                icon={doctorIcon}
                onTouchTap={() => this.select(0)}
                 href="/"

              />
              <BottomNavigationItem
                icon={registerIcon}
                onTouchTap={() => this.select(1)}
                href="/registermd"

              />
              <BottomNavigationItem
                icon={nearbyIcon}
                onTouchTap={() => this.select(2)}
                href="/map"

              />
              <BottomNavigationItem
                icon={assignment}
                onTouchTap={() => this.select(3)}
                href="/registerClinic"

              />
              <BottomNavigationItem
                icon={clinicIcon}
                onTouchTap={() => this.select(4)}
                href="/clinics"

              />
              <BottomNavigationItem
                icon={hospitalIcon}
                onTouchTap={() => this.select(5)}
                href="/hospitals"

              />
            </BottomNavigation>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
module.exports = Radium(ButtomNavigation);
