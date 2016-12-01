Meteor.methods({
  addDoctor(doctor){
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Doctors.insert({
        text: doctor.doctorName,
        url: doctor.url,
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
