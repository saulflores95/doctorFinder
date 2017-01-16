import React, {Component} from 'react';
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LabRaiting from './LabRaiting.jsx';
import {Row, Col, Visible, Hidden } from 'react-grid-system';



export default class LabHeader extends Component {
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


  render(){
    let lab = this.lab();

    if(!lab){
      return(<div><LoadingComponent /></div>);
    }

    var styles = {
      img: {
        width: '200px',
        height: '200px'
      },
      container: {
        marginTop: '30px',
      },
    }
    return(
      <div style={styles.container}>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <img style={styles.img} src={lab.img} />
            <h1>{lab.name}</h1>
            <LabRaiting />
          </Col>
        </Row>
      </div>
    )
  }
}
