Doctors = new Mongo.Collection("doctors");

Meteor.publish("allDoctors", function(){
  return Doctors.find();
});

Meteor.publish("userDoctors", function(){
  return Doctors.find({user: this.userId});
});
