import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ContentPaste from 'material-ui/svg-icons/content/content-paste'
import LocalHospital from 'material-ui/svg-icons/maps/local-hospital';

const doctorIcon = <LocalHospital />;
const registerIcon = <ContentPaste />;
const nearbyIcon = <IconLocationOn />;
injectTapEventPlugin();

const styles = {
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
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
                href="/registermd"
              />
            </BottomNavigation>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
