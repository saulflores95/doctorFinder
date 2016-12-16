Doctors = new Mongo.Collection("doctors");
Clinics = new Mongo.Collection("clinics");

Meteor.publish("allDoctors", function(){
  return Doctors.find();
});

Meteor.publish("userDoctors", function(){
  return Doctors.find({user: this.userId});
});

Meteor.publish("allClinics", function(){
  return Clinics.find();
});

Meteor.publish("userClinics", function(){
  return Clinics.find({user: this.userId});
});

Meteor.publish("allPharmacies", function(){
  return Pharmacies.find();
});
