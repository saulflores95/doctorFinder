import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import PharmacieList from './PharmacieList.jsx';
import PharmacieHeader from './PharmacieHeader.jsx';
import PharmacieMap from '../maps/PharmacieMap.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class PharmacieDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    }
  }

  pharmacie(){
    return Pharmacies.findOne(this.props.id);
  }

  delete(event){
    event.preventDefault();
    if(Meteor.userId()){
      Meteor.call('deletePharmacie', this.pharmacie(), (error, data) => {
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
        }else{
          Bert.alert('Pharmacie Eliminated', 'danger', 'fixed-top');
        }
      });
    }
  }


  render(){
    let pharmacie = this.pharmacie();
    const styles = {
      container: {
        height:200,
        paddingTop:35,
        paddingBottom:74,
        color:'white',
        fontFamily:'Roboto',
      }
    }

    var userChecker = null;
    if(!Meteor.userId()){
      userChecker = (
        <div>
          <h1>Log In to edit doctor</h1>
        </div>
      );
    }else {
      userChecker = (
        <div>
          <RaisedButton
            label="Edit Pharmacie"
            labelPosition="before"
            primary={false}
            href={`/pharmacies/${this.props.id}/edit`}
          />
          <RaisedButton
            label="Delete Pharmacie"
            labelPosition="before"
            primary={false}
            onClick={this.delete.bind(this)}
          />
        </div>
      );
    }


    if(!pharmacie){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div style={styles.container}>
          <MuiThemeProvider>
            <Container>
              <Row>
                <Col xs={6} sm={6} md={4} lg={4}><PharmacieHeader id={this.props.id}/></Col>
                <Col xs={6} sm={6} md={8} lg={8}> <PharmacieMap id={this.props.id} /></Col>
                <Col xs={12} sm={6} md={6} lg={6}>{userChecker}</Col>
              </Row>
            </Container>
            </MuiThemeProvider>
          </div>
    )
  }
}
