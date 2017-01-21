import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Container, Row } from 'react-grid-system';
export default class Uploader extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state = {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDlIUjYUc86gEO2-EczzVaoPBzC3AHw_z68-UsMdWoeRCaoUld-9F1do' // this is passed from the router. Well add this later
    }
  }


  componentWillMount(){
  // we create this rule both on client and server
    Slingshot.fileRestrictions("myFileUploads", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
      maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
    });
  }

  upload(){
    var uploader = new Slingshot.Upload("myFileUploads");
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response.
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      }
      else {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
      }
    });
  }

  formSubmit(){
  // Ofcourse you'll have other fields...
    let avatarUrl = this.state.avatar;
    console.log(avatarUrl);
  /*  Meteor.users.update( { _id: Meteor.userId() }, {
      $set: {profile: avatarUrl}
    });*/
  }

  render(){
    let styles = {
       uploader: {
         paddingTop:100
       }
    }
    return (
        <div style={styles.uploader}>
          <h1>Upload an Image</h1>
          <form>
            <div className="row well">
             <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputFile">File input</label>
                  <input type="file" id="input" onChange={this.upload.bind(this)} />
                  <p className="help-block">Image max restriction: 2MB, 500x500. Cropped: 200x200</p>
                </div>
              </div>
              <div className="col-md-6 utar-r">
                <img src={this.state.avatar} height="200" width="200" alt="..." className="img-rounded" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.formSubmit.bind(this)}>Update Profile</button>
              </div>
            </div>
          </form>
        </div>
      )
  }

}
