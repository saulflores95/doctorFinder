import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ReactDOM from 'react-dom';
import Radium from 'radium'

export default class LabList extends Component{

  imageChooser(props){
      if(props === 'Certus'){
          return 'https://paginas.seccionamarillsa.com.mx/img/upload/certus-2_3-400726723.jpg';
      }
      if(props === 'Klein'){
          return 'https://s3-media1.fl.yelpcdn.com/bphoto/wYeOng8pOYHa06gw2YATIA/l.jpg';
      }
      if(props === 'Gamboa'){
          return 'https://s3-media1.fl.yelpcdn.com/bphoto/fv2LdF74AhE9NtgrmVEaAQ/l.jpg';
      }
      if(props === ''){
          return 'http://cristianbriones.cl/wp-content/uploads/2016/02/error-2.png';
      }
      else{
        console.log('No tag fits the choosen image');
      }
  }

  render() {
    var img = this.imageChooser(this.props.lab);
    console.log(img);
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
          <div style={styles.back}>
              <a href={`/laboratories/${this.props.lab}`}>
                <img
                  style={styles.img}
                  src={img}
                />
              </a>
            <h1 style={styles.h2}> {this.props.lab} </h1>
          </div>
      </Col>

    )
  }
}
module.exports = Radium(LabList);
