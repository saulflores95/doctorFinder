import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LabList from './LabList.jsx';
import {Container, Row } from 'react-grid-system';

Labs = new Mongo.Collection("labs");

export default class LabWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        labs: Meteor.subscribe("allLabs")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.labs.stop();
  }

  labs(){
    return Labs.find().fetch();
  }

  labsList(){
    var arr = this.labs().map((lab) => {
      return lab.tag;
    });
    console.log(arr);
    var uniqueArr = arr.filter(function(elem, index, self){
      return index == self.indexOf(elem);
    });
    console.log(uniqueArr);
    return uniqueArr;
  }




  render(){

    return (
        <div>
          <Container>
            <Row>
              {this.labsList().map((lab)=>{
                return <LabList key={lab._id} lab={lab} />
            })}
            </Row>
          </Container>
        </div>
      )
    }
  }
