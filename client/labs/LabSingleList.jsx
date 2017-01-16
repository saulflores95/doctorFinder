import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LabSingle from './LabSingle.jsx';

export default class LabSingleList extends TrackerReact(Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        labs: Meteor.subscribe("allLabs")
      }
    }
  }

  labs(){
    return Labs.find({tag: this.props.name}).fetch();
  }

  render() {
    let labs = this.labs();
    var styles = {
      img: {
        width: '100%',
        height: '250px',
        position: 'relative',
        filter: 'brightness(40%)',
        transition: '1s',

        ':hover': {
           borderRadius: '50%',
           transition: '1s',
        },
      },
      h2: {
        position: 'absolute',
        width: '80%',
        top: '100px',
        left: '0px',
        color: 'white',
        textAlign: 'center',
        marginLeft: '10%',
        height: '15%',
      },
      back: {
        overflow: 'hidden',
        height: '250px',
        width: '100%',
        marginTop: '30px',
        padding: '5 5 5 5',
      },
    }
    return(
          <div>
            {labs.map((lab)=>{
              return <LabSingle name={this.props.name} lab={lab} />
            })}
          </div>
    )
  }
}
