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
        filter: 'blur(5px)',
        transition: '1s',

        ':hover': {
           borderRadius: '50%',
           transition: '1s',
        }
      },
      h2: {
        position: 'absolute',
        width: '80%',
        top: '100px',
        left: '0px',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgb(0, 188, 212)',
        opacity: '0.8',
        marginLeft: '10%',
        height: '15%',
      },
      back: {
        borderStyle: 'solid',
        borderWidth: '5px',
        height: '250px',
        width: '100%',
        marginTop: '30px',
        padding: '5 5 5 5',
      },
    }
    return(
      <Col xs={12} sm={6} md={6} lg={4}>
          <div style={styles.back}>
            <img href="/" key={this.props.clinic._id} style={styles.img} src={this.props.clinic.img}/>
            <h1 style={styles.h2}> {this.props.clinic.name} </h1>
          </div>
      </Col>

    )
  }
}
module.exports = Radium(ClinicList);
