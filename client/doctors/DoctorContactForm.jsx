import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FaPhone from 'react-icons/lib/fa/phone';

export default class DoctorContactForm extends Component {

  addDoctor(event){
    event.preventDefault();
    var firstName = this.refs.firstName.getValue();
    var lastName = this.refs.lastName.getValue();
    var email =this.refs.email.getValue();
    var message =this.refs.message.getValue();

    var message = {
      firstName: firstName,
      lastName: lastName,
      message: message,
      email: email
    };

    console.log(firstName);
    console.log(lastName);
    console.log(message);
    console.log(email);
    console.log('*************************');
    console.log(message);

    if(doctor){
      Meteor.call('sendMessage', message, (error, data)=>{
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
        }else{
          Bert.alert( 'Message Sent!', 'info', 'fixed-top' );
        }
    });

  }
}

  render(){

    return (
      <MuiThemeProvider>
            <form className="new-doctor" onSubmit={this.addDoctor.bind(this)}>
                <TextField
                  hintText="First Name"
                  ref="firstName"
                  fullWidth={true}
                />
                <TextField
                  hintText="Last Name"
                  ref="lastName"
                  fullWidth={true}
                />
                <TextField
                  hintText="Email"
                  ref="email"
                  fullWidth={true}
                />
                <TextField
                  hintText="Messege"
                  ref="message"
                  fullWidth={true}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                />
                <RaisedButton
                  label="Send"
                  type="submit"
                  primary={true}

                />
                <RaisedButton
                  label="Call"
                  labelPosition="before"
                  primary={false}
                  icon={<FaPhone />}
                />
            </form>
      </MuiThemeProvider>

    )
  }

}
