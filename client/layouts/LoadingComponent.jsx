import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

export default class ButtomNavigation extends Component{
  constructor(){
    super();

    this.state = {}
  }

  render() {
    const styles = {
      centered: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        marginTop: '-40px',
        marginLeft: '-40px'
      }
    }
    return (
      <div style={styles.centered}>
        <MuiThemeProvider>
          <CircularProgress color='white' size={80} thickness={7}/>
        </MuiThemeProvider>
      </div>
    );
  }
}
