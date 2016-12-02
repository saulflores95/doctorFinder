import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class DoctorRegistrationForm extends Component {

  addDoctor(event){
    event.preventDefault();
    var name = this.refs.doctorName.getValue();
    var img = this.refs.doctorImgUrl.getValue();
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
      curriculum: curriculum,
      email: email
    };

    console.log(name);
    console.log(img);
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

  render(){

    return (
      <MuiThemeProvider>
        <Row>
          <Col xs={6} xsOffset={6} >
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
                  hintText="E-mail"
                  ref="email"
                  fullWidth={true}
                />
                <RaisedButton
                  label="Register"
                  type="submit"
                  className="button-submit"
                  primary={true}
                />
            </form>
          </Col>
        </Row>
      </MuiThemeProvider>

    )
  }

}
