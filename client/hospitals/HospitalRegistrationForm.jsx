import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Close from 'material-ui/svg-icons/navigation/close';
export default class HospitalRegistrationForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Podologia',
      inputs:[1],
    }
  }

  addHospital(event){
    event.preventDefault();
    var name = this.refs.hospitalName.getValue();
    var img = this.refs.hospitalImgUrl.getValue();
    var phone = this.refs.phone.getValue();
    var latitude = this.refs.latitude.getValue();
    var longitude = this.refs.longitude.getValue()

    var hospital = {
      name: name,
      img: img,
      phone: phone,
      latitude:latitude,
      longitude:longitude,
    };
    console.log(hospital);
      if(hospital){
        Meteor.call('addHospital', hospital, (error, data)=>{
          if(error){
            Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
          }else{
            Bert.alert( 'Registrado!', 'info', 'fixed-top' );
          }
      });

    }
  }

  addInputField(event){
    event.preventDefault();
    var newInput = this.state.inputs.length;
    this.state.inputs.push(newInput);
    this.setState({});
  }

  removeInputField(event){
    event.preventDefault();
    this.state.inputs.pop();
    this.setState({});
  }

  render(){

    const styles = {
      paper: {
        width: '100%',
        padding: '0 0 0 0',
        marginTop: '50px'

      },
      formStyle: {
      },
      formDivisor: {
          padding: '0 0 30px 0'
      },
      formMessageDivisor: {
        padding: '0 0 10px 0'
      },
      customWidth: {
        width: '95%',
      },
    }

    return (
      <MuiThemeProvider>
        <Container>
        <Paper style={styles.paper} zDepth={3}>
        <Container>
          <form className="new-doctor" onSubmit={this.addHospital.bind(this)}>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Hospital Name"
                    ref="hospitalName"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="url de imagen"
                    ref="hospitalImgUrl"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Latitude"
                    ref="latitude"
                    fullWidth={false}
                  />
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Longitude"
                    ref="longitude"
                    fullWidth={false}
                  />
                </Col>
              </Row>
            </div>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Phone Number"
                    ref="phone"
                    fullWidth={false}
                  />
                </Col>
                <Col sm={2}>
                  <RaisedButton
                    label="Register"
                    type="submit"
                    className="button-submit"
                    primary={true}
                  />
                </Col>
              </Row>
            </div>
          </form>
        </Container>
        </Paper>
        </Container>
      </MuiThemeProvider>
    )
  }

}