import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ClinicEditForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Dermatology',
    }
  }

  clinic(){
    return Clinics.findOne(this.props.id);
  }

  editClinic(event){
    event.preventDefault();
    var name = this.refs.clinicName.getValue();
    var img = this.refs.clinicImgUrl.getValue();
    var specialty = this.state.value;
    var specific = {
      one:this.refs.specificOne.getValue(),
      two:this.refs.specificTwo.getValue(),
      three:this.refs.specificThree.getValue(),
      four:this.refs.specificFour.getValue(),
      five:this.refs.specificFive.getValue(),
      six:this.refs.specificSix.getValue()
    };
    var email = this.refs.email.getValue();
    var clinic = {
      name: name,
      img: img,
      specific: specific,
      email: email,
      specialty:specialty
    };
    console.log(clinic);
      if(clinic){
        Meteor.call('editClinic', this.clinic(), clinic, (error, data)=>{
          if(error){
            Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
          }else{
            Bert.alert( 'Registrado!', 'info', 'fixed-top' );
          }
      });
    }
    console.log(specific);
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


  render(){
    let clinic = this.clinic();
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
          <form className="new-doctor" onSubmit={this.editClinic.bind(this)}>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Clinic Name"
                    ref="clinicName"
                    fullWidth={true}
                    defaultValue={clinic.name}

                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="url de imagen"
                    ref="clinicImgUrl"
                    fullWidth={true}
                    defaultValue={clinic.img}

                  />
                </Col>
                <Col sm={12} md={12} lg={12}>
                <SelectField
                  floatingLabelText="Specialty"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  defaultValue={clinic.specialty}

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
                    defaultValue={clinic.specificOne}

                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 2"
                    ref="specificTwo"
                    fullWidth={true}
                    defaultValue={clinic.specificTwo}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 3"
                    ref="specificThree"
                    fullWidth={true}
                    defaultValue={clinic.specificThree}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 4"
                    ref="specificFour"
                    fullWidth={true}
                    defaultValue={clinic.specificFour}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 5"
                    ref="specificFive"
                    fullWidth={true}
                    defaultValue={clinic.specificFive}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Specific Speaciality 6"
                    ref="specificSix"
                    fullWidth={true}
                    defaultValue={clinic.specificFive}
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
                    defaultValue={clinic.email}
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
