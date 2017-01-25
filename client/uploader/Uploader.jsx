import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Uploader extends TrackerReact(React.Component){

  constructor() {
    super();
    this.state = {
      url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbPvqnfj0taeHk9BLFCYpySg2-eVk2i7kx4PE046Waix2-zM-NAILl-m8',
    };
    this.upload = this.upload.bind(this);

  }


  componentWillMount(){
    // we create this rule both on client and server
    Slingshot.fileRestrictions("myFileUploads", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
      maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
    });
  }

  handleImageChange(url){
    this.setState({
      url:url
    });
  }

createUser(){
  var newUser = {
    name:'Dr. Ramirez',
    img: this.state.url
  }
  console.log('New user added: ', newUser);
}

  upload(){
    var uploader = new Slingshot.Upload("myFileUploads");
    var newUrl = null;
    var self = this;

    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        alert (error);
      }
      else {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
        self.handleImageChange(downloadUrl);
        self.createUser();
      }
    });
  }

  render(){
    let styles = {
      form:{
        paddingTop:100,
      },
      img: {
        padding:50,
        borderRadius:'50%',
      }
    }
    return(
      <div style={styles.form}>
          <form>
                <input type="file" id="input" />
                <button type="button" onClick={this.upload.bind(this)}>Click Me!</button>
          </form>
          <div style={styles.img}>
            <img width="300" height="300" src={this.state.url} />
          </div>
      </div>
    )
  }
}
