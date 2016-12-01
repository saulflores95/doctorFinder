import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class DoctorDetail extends Component{
  constructor(){
    super();

    this.state = {
      subscription: {
        doctors: Meteor.subscribe("userDoctors")
      }
    }
  }

  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
        ReactDOM.findDOMNode(this.refs.container));
  }

  doctor(){
    return Doctors.findOne(this.props.id);
  }


  render(){
    let doc = this.doctor();
    if(!doc){
      return(<div>Loading...</div>);
    }

      return(
        <div>
          <h1>{doc.text}</h1>
        </div>
      )
  }
}
