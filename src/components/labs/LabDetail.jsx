import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import LabList from './LabList.jsx';
import LabHeader from './LabHeader.jsx';
import LabMap from '../maps/LabMap.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class LabDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        labs: Meteor.subscribe("allLabs")
      }
    }
  }

  lab(){
    return Labs.findOne(this.props.id);
  }

  delete(event){
    event.preventDefault();
    if(Meteor.userId()){
      Meteor.call('deleteLab', this.lab(), (error, data) => {
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-left' );
        }else{
          Bert.alert('Laboratory Eliminated', 'danger', 'fixed-top');
        }
      });
    }
  }


  render(){
    let lab = this.lab();
    const styles = {
      container: {
        height:200,
        paddingTop:85,
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
            label={<span className="label-text">Edit Laboratory</span>}
            labelPosition="before"
            primary={false}
            href={`/laboratories/${this.props.name}/${this.props.id}/edit`}
          />
          <RaisedButton
            label={<span className="label-text">Delete Lab</span>}
            labelPosition="before"
            primary={false}
            onClick={this.delete.bind(this)}
          />
        </div>
      );
    }


    if(!lab){
      return(<div><LoadingComponent /></div>);
    }

      return(
          <div className="component-detail">
            <MuiThemeProvider>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={6}><LabHeader id={this.props.id}/></Col>
                  <Col xs={12} sm={12} md={12} lg={12}> <LabMap id={this.props.id} /></Col>
                  <Col xs={12} sm={12} md={12} lg={6}>{userChecker}</Col>
                </Row>
              </Container>
              </MuiThemeProvider>
          </div>
    )
  }
}
