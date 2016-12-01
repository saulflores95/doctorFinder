Meteor.methods({
  addDoctor(doctorName, imgUrl){
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Doctors.insert({
        docName: doctorName,
        docImgUrl: imgUrl,
        complete: false,
        createdAt: new Date(),
        user: Meteor.userId()
      });
    },
    deleteDoctor(doctor){
      check(doctor, Object);
      if(Meteor.userId() !== doctor.user){
        throw new Meteor.Error('Incorrect user');
      }
      Doctors.remove(doctor._id);
    }
});
