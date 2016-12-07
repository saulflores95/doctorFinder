import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

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
    var curriculum = {
      one:this.refs.curriculumOne.getValue(),
      two:this.refs.curriculumTwo.getValue(),
      three:this.refs.curriculumThree.getValue(),
      four:this.refs.curriculumFour.getValue(),
      five:this.refs.curriculumFive.getValue()
    };
    var email =this.refs.email.getValue();
    var doctor = {
      name: name,
      img: img,
      description: description,
      insurance: insurance,
      curriculum: curriculum,
      email: email
    };

    console.log(name);
    console.log(img);
    console.log(description);
    console.log(insurance);
    console.log(curriculum);
    console.log(email);
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
    return (
      <MuiThemeProvider>
        <Container>
          <form className="new-doctor" onSubmit={this.addDoctor.bind(this)}>
              <TextField
                hintText="Agrega una doctor"
                ref="doctorName"
                fullWidth={true}
              />
              <TextField
                hintText="url de imagen"
                ref="doctorImgUrl"
                fullWidth={true}
              />
              <TextField
                hintText="Specialty"
                ref="specialty"
                fullWidth={true}
              />
              <TextField
                hintText="Work experience 1"
                ref="curriculumOne"
                fullWidth={true}
              />
              <TextField
                hintText="Work experience 2"
                ref="curriculumTwo"
                fullWidth={true}
              />
              <TextField
                hintText="Work experience 3"
                ref="curriculumThree"
                fullWidth={true}
              />
              <TextField
                hintText="Work experience 4"
                ref="curriculumFour"
                fullWidth={true}
              />
              <TextField
                hintText="Work experience 5"
                ref="curriculumFive"
                fullWidth={true}
              />
              <TextField
                hintText="Describe yourself or experience(do not be shy)"
                ref="description"
                fullWidth={true}
                multiLine={true}
                rows={3}
                rowsMax={6}
              />
              <Checkbox
                label="USA insurance?"
                onClick={this.toggleChecked.bind(this)}
              />
              <TextField
                hintText="E-mail"
                ref="email"
                fullWidth={false}
              />
              <TextField
                hintText="Phone Number"
                ref="phone"
                fullWidth={false}
              />
              <RaisedButton
                label="Register"
                type="submit"
                className="button-submit"
                primary={true}
              />
          </form>
        </Container>
      </MuiThemeProvider>
    )
  }

}
