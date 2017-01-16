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
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o';

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

      <div className="footer">
        <MuiThemeProvider>
          <Paper zDepth={1} className="bottom-paper">
            <BottomNavigation selectedIndex={this.state.selectedIndex} className="bottom">
              <BottomNavigationItem
                icon={<LocalHospital className="icon-pixel"/>}
                onTouchTap={() => this.select(0)}
                 href="/"
              />
              <BottomNavigationItem
                icon={<FaHeartbeat className="icon-pixel"/>}
                onTouchTap={() => this.select(1)}
                href="/clinics"
              />
              <BottomNavigationItem
                icon={<FaPlusSquareO className="icon-pixel"/>}
                onTouchTap={() => this.select(2)}
                href="/pharmacies"
              />
              <BottomNavigationItem
                icon={<FaHospitalO className="icon-pixel"/>}
                onTouchTap={() => this.select(3)}
                href="/hospitals"
              />
              <BottomNavigationItem
                icon={<FaHospitalO className="icon-pixel"/>}
                onTouchTap={() => this.select(3)}
                href="/laboratories"
              />
              <BottomNavigationItem
                icon={<IconLocationOn className="icon-pixel"/>}
                onTouchTap={() => this.select(4)}
                href="/map"
              />
            </BottomNavigation>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
module.exports = Radium(ButtomNavigation);
