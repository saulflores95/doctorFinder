 import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Uploader extends TrackerReact(React.Component){

  constructor() {
    super();
    this.upload = this.upload.bind(this);
  }


componentWillMount(){
  // we create this rule both on client and server
  Slingshot.fileRestrictions("myFileUploads", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  });
}


createUser(){
  var newUser = {
    name:'Dr. Ramirez',
    img: this.props.url
  }
  console.log('New user added: ', newUser);
}

getFile(){
  document.getElementById('input').click();
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
      self.props.handle(downloadUrl);
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
    },
    inputBtn:{
      position:'relative',
      fontFamily:'Roboto',
      width:150,
      padding:10,
      webKitBorderRadius: 5,
      mozBorderRadius:5,
      border:1,
      textAlign:'center',
      backgroundColor:'#DDD',
      cursor:'pointer',
    },
    hideOriginalInputButton:{
      height:0,
      width:0,
      overFlow:'hidden',
    }
  }
    return(
      <div style={styles.form}>
                <input style={styles.hideOriginalInputButton} onChange={this.upload.bind(this)} type="file" id="input" />
                <div style={styles.inputBtn} onClick={this.getFile.bind(this)}>click to upload a file</div>
      </div>
    )
  }
}
