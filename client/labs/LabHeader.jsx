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
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      },
      container: {
        marginTop: 30,
        paddingBottom: 40,
      },
    }
    return(
      <div style={styles.container}>
        <Row>
          <Col sm={6} md={6} lg={8}>
            <img width="250" height="200" style={styles.img} src={lab.img} />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <h1 className="detail-name">{lab.name}</h1>
            <div className="raiting-star"><LabRaiting /></div>
          </Col>
        </Row>
      </div>
    )
  }
}
