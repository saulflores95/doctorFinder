import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

export default class LandingPage extends Component {

  constructor() {
    super();
    this.state = {
      url:'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/landingImg.jpg'
    }
  }


  render() {
    const styles = {
        leafletContainer: {
          width: '100%',
          height: '250',
        },
      }

    return (
      <div>
        <img width='100%' height='100%' src={this.state.url} />
      </div>
      )
  }
}
