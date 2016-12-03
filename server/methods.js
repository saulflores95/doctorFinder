Meteor.methods({
  addDoctor(doctor){
    check(doctor, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Doctors.insert({
        name: doctor.name,
        img: doctor.img,
        curriculumOne: doctor.curriculum.one,
        curriculumTwo: doctor.curriculum.two,
        curriculumThree: doctor.curriculum.three,
        curriculumFour: doctor.curriculum.four,
        curriculumFive: doctor.curriculum.five,
        email: doctor.email,
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
  },
  sendMessage(message){
    console.log(message);
  }
});
