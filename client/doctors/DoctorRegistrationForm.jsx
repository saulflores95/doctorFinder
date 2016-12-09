import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';

export default class DoctorRegistrationForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false
    }
  }

  addDoctor(event){
    event.preventDefault();
    var name = this.refs.doctorName.getValue();
    var img = this.refs.doctorImgUrl.getValue();
    var description = this.refs.description.getValue();
    var insurance = this.state.toogleState;
    var specialty = this.refs.specialty.getValue();
    var curriculum = {
      one:this.refs.curriculumOne.getValue(),
      two:this.refs.curriculumTwo.getValue(),
      three:this.refs.curriculumThree.getValue(),
      four:this.refs.curriculumFour.getValue(),
      five:this.refs.curriculumFive.getValue(),
      six:this.refs.curriculumSix.getValue()
    };
    var email =this.refs.email.getValue();
    var doctor = {
      name: name,
      img: img,
      description: description,
      insurance: insurance,
      curriculum: curriculum,
      email: email,
      specialty:specialty
    };

    console.log(name);
    console.log(img);
    console.log(description);
    console.log(insurance);
    console.log(curriculum);
    console.log(email);
    console.log(specialty);
    console.log('*************************');
    console.log(doctor);

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
              <TextField
                hintText="Specialty"
                ref="specialty"
                fullWidth={true}
              />
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
