import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ReactDOM from 'react-dom';
import Radium from 'radium'

export default class ClinicList extends Component {

  render() {
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
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className="list-back">
          <a href={`/clinics/${this.props.clinic._id}`}>
            <img
              className="img-list"
              src={this.props.clinic.img}
            />
          </a>
          <h1 className="list-h1">
            <a className="link" href={`/clinics/${this.props.clinic._id}`}>
              {this.props.clinic.name}
            </a>
          </h1>
        </div>
      </Col>
    )
  }
}
module.exports = Radium(ClinicList);
