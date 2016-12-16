Meteor.methods({
  addDoctor(doctor){
    check(doctor, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Doctors.insert({
        name: doctor.name,
        img: doctor.img,
        description:doctor.description,
        curriculumOne: doctor.curriculum.one,
        curriculumTwo: doctor.curriculum.two,
        curriculumThree: doctor.curriculum.three,
        curriculumFour: doctor.curriculum.four,
        curriculumFive: doctor.curriculum.five,
        curriculumSix: doctor.curriculum.six,
        specialty:doctor.specialty,
        email: doctor.email,
        insurance: doctor.insurance,
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
  addClinic(clinic){
    check(clinic, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Clinics.insert({
        name: clinic.name,
        img: clinic.img,
        specificOne: clinic.specific.one,
        specificTwo: clinic.specific.two,
        specificThree: clinic.specific.three,
        specificFour: clinic.specific.four,
        specificFive: clinic.specific.five,
        specificSix: clinic.specific.six,
        email: clinic.email,
        createdAt: new Date(),
        user: Meteor.userId()
      });
    },
  sendMessage(message){
    console.log(message);
  }
});
