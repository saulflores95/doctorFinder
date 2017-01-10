import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Geolocation } from 'meteor/mdg:geolocation';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DoctorRegistrationForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Podologia',
      count:0,
      latitude:0,
      longitude:0,
    }
  }

  addDoctor(event){
      event.preventDefault();
      var name = this.refs.doctorName.getValue();
      var img = this.refs.doctorImgUrl.getValue();
      var description = this.refs.description.getValue();
      var insurance = this.state.toogleState;
      var specialty = this.state.value;
      var curriculum = {
        one:this.refs.curriculumOne.getValue(),
        two:this.refs.curriculumTwo.getValue(),
        three:this.refs.curriculumThree.getValue(),
        four:this.refs.curriculumFour.getValue(),
        five:this.refs.curriculumFive.getValue(),
        six:this.refs.curriculumSix.getValue()
      };
      var email = this.refs.email.getValue();
      var latitude = this.state.latitude;
      var longitude = this.state.longitude;
      var doctor = {
        name: name,
        img: img,
        description: description,
        insurance: insurance,
        curriculum: curriculum,
        email: email,
        specialty:specialty,
        latitude: latitude,
        longitude: longitude,
      };

      console.log('Doctor: ', doctor);

      if(doctor){
        Meteor.call('addDoctor', doctor, (error, data)=>{
          if(error){
            Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
          }else{
            Bert.alert( 'Registrado!', 'info', 'fixed-top' );
          }
      });

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

  getLocation(){
    console.log('User Location:', Geolocation.latLng());
    console.log(this.state.count);
    if(this.state.count >= 1){
      this.state.longitude = Geolocation.latLng().lng;
      this.state.latitude = Geolocation.latLng().lat;
    }
    this.state.count++;
    console.log('State longitude:', this.state.longitude);
    console.log('State latitude:', this.state.latitude);

  }

  componentDidMount(){
    this.getLocation();
  }

  handleOpen(){
    this.state.open = true;
  };

  handleClose(){
    this.state.open = false;
  };

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
      formStyle:{
        color:'white',
      }
    }

    return (
      <MuiThemeProvider>
            <Container>
              <Paper style={styles.paper} zDepth={3}>
                <Container>
                <form className="new-doctor" onSubmit={this.addDoctor.bind(this)}>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText="Agrega una doctor"
                          ref="doctorName"
                          fullWidth={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText="url de imagen"
                          ref="doctorImgUrl"
                          fullWidth={true}
                        />
                      </Col>
                    </Row>
                    <SelectField
                      floatingLabelText="Specialty"
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                    >
                      <MenuItem value={'Audiologist'} primaryText="Audiologist" />
                      <MenuItem value={'Allergist'} primaryText="Allergist " />
                      <MenuItem value={'Anesthesiologist'} primaryText="Anesthesiologist  " />
                      <MenuItem value={'Cardiologist'} primaryText="Cardiologist " />
                      <MenuItem value={'Dentist'} primaryText="Dentist " />
                      <MenuItem value={'Dermatologist'} primaryText="Dermatologist " />
                      <MenuItem value={'Endocrinologist'} primaryText="Endocrinologist " />
                      <MenuItem value={'Epidemiologist'} primaryText="Epidemiologist " />
                      <MenuItem value={'Gynecologist'} primaryText="Gynecologist " />
                      <MenuItem value={'Infectious Disease Specialist'} primaryText="Infectious Disease Specialist  " />
                      <MenuItem value={'Internal Medicine Specialist'} primaryText="Internal Medicine Specialist  " />
                      <MenuItem value={'Medical Geneticist'} primaryText="Medical Geneticist  " />
                      <MenuItem value={'Microbiologist'} primaryText="Microbiologist  " />
                      <MenuItem value={'Neonatologist'} primaryText="Neonatologist  " />
                      <MenuItem value={'Neurologist'} primaryText="Neurologist  " />
                      <MenuItem value={'Obstetrician'} primaryText="Obstetrician  " />
                      <MenuItem value={'Oncologist'} primaryText="Oncologist  " />
                      <MenuItem value={'Orthopedic Surgeon'} primaryText="Orthopedic Surgeon  " />
                      <MenuItem value={'ENT Specialist'} primaryText="ENT Specialist  " />
                      <MenuItem value={'Pediatrician'} primaryText="Pediatrician  " />
                      <MenuItem value={'Plastic Surgeon'} primaryText="Plastic Surgeon  " />
                      <MenuItem value={'Podiatrist'} primaryText="Podiatrist  " />
                      <MenuItem value={'Psychiatrist'} primaryText="Psychiatrist  " />
                      <MenuItem value={'Radiologist'} primaryText="Radiologist  " />
                      <MenuItem value={'Rheumatologist'} primaryText="Rheumatologist  " />
                      <MenuItem value={'Surgeon'} primaryText="Surgeon  " />
                      <MenuItem value={'Urologist'} primaryText="Urologist  " />
                    </SelectField>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 1"
                          ref="curriculumOne"
                          fullWidth={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 2"
                          ref="curriculumTwo"
                          fullWidth={true}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 3"
                          ref="curriculumThree"
                          fullWidth={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 4"
                          ref="curriculumFour"
                          fullWidth={true}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 5"
                          ref="curriculumFive"
                          fullWidth={true}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText="Work experience 6"
                          ref="curriculumSix"
                          fullWidth={true}
                        />
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <p>You should be registering in your office or hospital of work, by clicking this button you will be added to de doctors map</p>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <RaisedButton
                        type="button"
                        onClick={this.getLocation.bind(this)}
                        label="GetLocation"/>
                    </Col>
                  </Row>
                  <div style={styles.formMessageDivisor}>
                    <TextField
                      hintText="Describe yourself or experience(do not be shy)"
                      ref="description"
                      fullWidth={true}
                      multiLine={true}
                      rows={3}
                      rowsMax={6}
                    />
                  </div>
                  <div style={styles.formDivisor}>
                    <Checkbox
                      label="USA insurance?"
                      onClick={this.toggleChecked.bind(this)}
                    />
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
                      <Col sm={12} md={6} lg={6}>
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
