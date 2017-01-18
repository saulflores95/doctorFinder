import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ReactDOM from 'react-dom';
import Radium from 'radium'

export default class PharmacieList extends Component {

  imageChooser(props){
      if(props === 'Roma'){
          return 'http://zetatijuana.com/wp-content/uploads/2016/02/farmacias-roma-1.jpg';
        }
      if(props === 'Benavides'){
          return 'https://www.apestan.com/content_files/case_attached_images/861bdee9e598a41fda075895ad2db755.jpg';
        }
      else{
        console.log('No tag fits the choosen image');
      }
  }



  render() {
    var img = this.imageChooser(this.props.pharmacie);
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
          <div className="list-back">
              <a href={`/pharmacies/${this.props.pharmacie}`}>
                <img
                  className="img-list"
                  src={img}
                />
              </a>
            <h1 className="list-h1"> {this.props.pharmacie} </h1>
          </div>
      </Col>

    )
  }
}
module.exports = Radium(PharmacieList);
