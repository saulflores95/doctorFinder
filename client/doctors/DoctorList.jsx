import React, {Component} from 'react';


export default class DoctorList extends Component {

toggleChecked(){
  Meteor.call('toggleDoctor', this.props.doctor);
}

deleteDoctor(){
  Meteor.call('deleteDoctor', this.props.doctor);
}


  render(){

    return(
      <div>
        <ul className="collection">
            <li className="collection-item avatar">
              <div className="row">
                <div className="col l11 m11 s11">
                  <img src={this.props.doctor.url} alt="" className="circle" />
                  <span className="title">{this.props.doctor.text}</span>
                  <a href={`/doctors/${this.props.doctor._id}`} class="secondary-content"><i class="material-icons">mas info</i></a>
                </div>
                <div className="col l1 m1">
                  <button className="btn-floating btn-large waves-effect waves-light red"
                    onClick={this.deleteDoctor.bind(this)}>
                    &times;
                  </button>
                </div>
              </div>
            </li>
        </ul>
      </div>

    )
  }
}
