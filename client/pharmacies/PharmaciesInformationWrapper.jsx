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
import PharmacieGeneralMap from '../maps/PharmacieGeneralMap.jsx'
import PharmacieSingleList from './PharmacieSingleList.jsx';
export default class PharmacieDetail extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        pharmacies: Meteor.subscribe("allPharmacies")
      }
    }
  }


  render(){
    const styles = {
      container: {
        height:50,
        paddingBottom:74,
        color:'white',
        fontFamily:'Roboto',
        marginTop:50,
        paddingTop:35,
      },
      h2: {
        fontSize: 50,
        left: '0px',
        color: 'white',
        textAlign: 'center',
      },
    }

      return(
          <div style={styles.container}>
          <MuiThemeProvider>
            <Container>
              <h1 style={styles.h2}>{this.props.name}</h1>
              <Row>
                <Col xs={12} sm={12} md={12} lg={8}> <PharmacieGeneralMap name={this.props.name} /></Col>
                <Col xs={12} sm={12} md={12} lg={4}><PharmacieSingleList name={this.props.name} /></Col>
              </Row>
            </Container>
            </MuiThemeProvider>
          </div>
    )
  }
}
