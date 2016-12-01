import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class DoctorRegistrationForm extends Component {

  addDoctor(event){
    event.preventDefault();
    var doctorName = this.refs.doctorName.getValue();
    var url = this.refs.doctorImgUrl.getValue();

    console.log(doctorName);
    console.log(url);

    if(doctorName){
      Meteor.call('addDoctor', doctorName, url, (error, data)=>{
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
          <RaisedButton
            label="Register"
            type="submit"
            className="button-submit"
            primary={true}
          />
      </form>
      </MuiThemeProvider>

    )
  }

}
