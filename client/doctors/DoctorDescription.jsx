import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';

injectTapEventPlugin();

export default class DoctorDescription extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      subscription: {
        doctors: Meteor.subscribe("userDoctors")
      }
    };
  }


  doctor(){
    return Doctors.findOne(this.props.id);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  doctor(){
    return Doctors.findOne(this.props.id);
  }

  render(){
    let doctor = this.doctor();
    const styles = {
      paper: {
        padding: '5px 0 10px 0',
        marginBottom: '20px'
      },
      text: {
        textAlign: 'center'
      },
      p: {
        lineHeight: '20px',
        width: '100%',
        height: '60px'
      }
    }

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];
    return(
      <div>
        <MuiThemeProvider>
          <Paper zDepth={1} style={styles.paper}>
            <Container>
            <div style={styles.text}>
              <h3> Description: </h3>
              <p style={styles.p}>{doctor.description}</p>
              <RaisedButton label="Read more" onTouchTap={this.handleOpen.bind(this)}/>
              </div>
            </Container>
          </Paper>
        </MuiThemeProvider>
        <div>
          <MuiThemeProvider>
            <Dialog
             title="Dialog With Actions"
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={this.handleClose.bind(this)}
             >
             <p>{doctor.description}</p>
            </Dialog>
       </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
