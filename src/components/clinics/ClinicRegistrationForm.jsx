import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Uploader from '../uploader/Uploader.jsx';

export default class ClinicRegistrationForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Dermatology',
      url:'http://www.gatt.org/re/clt/wp-content/uploads/wovaxproperty-images/3224367/3224367-default.jpg',
    }
  }

  toggleChecked(Checkbox){
    console.log('this was pressed');
    if(this.state.toogleState == false){
      this.state.toogleState = true;
    }else{
      this.state.toogleState = false;
    }
    console.log(this.state.toogleState);
  }

  handleChange(event, index, value){
    this.setState({value: value});
  }

  handleImageChange(url){
    if(url){
      this.setState({
        url:url
      });
      console.log('State From Parent Change: ', this.state.url);
    }else if(!url){
    console.log('url not found');
    }
  }

  addClinic(){
    var name = this.refs.clinicName.getValue();
    var img = this.state.url;
    var specialty = this.state.value;
    var specific = {
      one:this.refs.specificOne.getValue(),
      two:this.refs.specificTwo.getValue(),
      three:this.refs.specificThree.getValue(),
      four:this.refs.specificFour.getValue(),
      five:this.refs.specificFive.getValue(),
      six:this.refs.specificSix.getValue()
    };
    var latitude = this.refs.latitude.getValue();
    var longitude = this.refs.longitude.getValue();
    var email = this.refs.email.getValue();
    var clinic = {
      name: name,
      img: img,
      specific: specific,
      email: email,
      latitude:latitude,
      longitude:longitude,
      specialty:specialty
    };
    console.log(clinic);
      if(clinic){
        Meteor.call('addClinic', clinic, (error, data)=>{
          if(error){
            Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-left' );
          }else{
            Bert.alert( 'Registrado!', 'info', 'fixed-top' );
          }
      });
    }
    console.log(specific);
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
      container: {
        paddingTop:35,
        paddingBottom: 85
      },
      img: {
        paddingTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }
    }

    return (
      <div style={styles.container}>
      <MuiThemeProvider>
        <Container>
        <Paper style={styles.paper} zDepth={3}>
        <Container>
          <form className="new-doctor">
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <img width="250" height="200" style={styles.img} src={this.state.url} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Uploader handle={this.handleImageChange.bind(this)}></Uploader>
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Clinic Name"
                    ref="clinicName"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6}>
                <SelectField
                  floatingLabelText="Specialty"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                >
                  <MenuItem value={'Dermatology'} primaryText="Dermatology" />
                  <MenuItem value={'Dental'} primaryText="Dental " />
                  <MenuItem value={'Hair Transplant'} primaryText="Hair Transplant  " />
                  <MenuItem value={'Foot'} primaryText="Foot " />
                  <MenuItem value={'Oncology'} primaryText="Oncology " />
                  <MenuItem value={'Fertility Control '} primaryText="Fertility Control  " />
                  <MenuItem value={'Eye'} primaryText="Eye " />
                  <MenuItem value={'SPA '} primaryText="SPA  " />
                  <MenuItem value={'Pediatric'} primaryText="Pediatric " />
                  <MenuItem value={'Plastic Surgery'} primaryText="Plastic Surgery  " />
                </SelectField>
                </Col>
              </Row>


            </div>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality"
                    ref="specificOne"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 2"
                    ref="specificTwo"
                    fullWidth={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 3"
                    ref="specificThree"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 4"
                    ref="specificFour"
                    fullWidth={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 5"
                    ref="specificFive"
                    fullWidth={true}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 6"
                    ref="specificSix"
                    fullWidth={true}
                  />
                </Col>
              </Row>
              <Row>
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
                    hintText="E-mail"
                    ref="email"
                    fullWidth={false}
                  />
                </Col>
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
                    onClick={this.addClinic.bind(this)}
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
      </div>
    )
  }

}
