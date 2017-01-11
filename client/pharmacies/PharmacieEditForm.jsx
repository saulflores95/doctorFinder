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

export default class PharmacieEditForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Podologia',
      inputs:[1],
    }
  }

  pharmacie(){
    return Pharmacies.findOne(this.props.id);
  }

  editPharmacie(event){
    event.preventDefault();
    var name = this.refs.clinicName.getValue();
    var img = this.refs.clinicImgUrl.getValue();
    var phone = this.refs.phone.getValue();
    var lat = [];
    var lng = [];
    var coordenates = [];

    let formElements = event.target.elements;
     Object.keys(formElements).forEach((key) => {
       if(key.search('lat') != -1){
         lat.push(formElements[key].value)
       }else if (key.search('lng') != -1) {
         lng.push(formElements[key].value)
       }
     });

     coordenates = {
       lat: lat,
       lng: lng
     }
    console.log('Coordenates:', coordenates);

    var pharmacie = {
      name: name,
      img: img,
      phone: phone,
      coordenates:coordenates,
    };
    console.log(pharmacie);
      if(pharmacie){
        Meteor.call('editPharmacie', this.pharmacie(), pharmacie, (error, data)=>{
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
    let pharmacie = this.pharmacie();
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
          <form className="new-doctor" onSubmit={this.editPharmacie.bind(this)}>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Pharmacie Name"
                    ref="clinicName"
                    fullWidth={true}
                    defaultValue={pharmacie.name}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="url de imagen"
                    ref="clinicImgUrl"
                    fullWidth={true}
                    defaultValue={pharmacie.img}
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
                    defaultValue={pharmacie.phone}
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
