Meteor.methods({
/*Doctor Methods*/
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
        latitude: doctor.latitude,
        longitude: doctor.longitude,
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
  editDoctor(doctor, newDoctor){
    check(doctor, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Doctors.update(doctor._id, {
      $set:{
        name: newDoctor.name,
        img: newDoctor.img,
        description:newDoctor.description,
        curriculumOne: newDoctor.curriculum.one,
        curriculumTwo: newDoctor.curriculum.two,
        curriculumThree: newDoctor.curriculum.three,
        curriculumFour: newDoctor.curriculum.four,
        curriculumFive: newDoctor.curriculum.five,
        curriculumSix: newDoctor.curriculum.six,
        specialty:newDoctor.specialty,
        email: newDoctor.email,
        insurance: newDoctor.insurance,
      },
    });
  },
/*Doctor Methods End*/

/*Clinic Methods*/
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
  deleteClinic(clinic){
    check(clinic, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('Login');
    }
    Clinics.remove(clinic._id);
  },
  editClinic(clinic, newClinic){
    check(clinic, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Clinics.update(clinic._id, {
      $set:{
        name: newClinic.name,
        img: newClinic.img,
        specificOne: newClinic.specific.one,
        specificTwo: newClinic.specific.two,
        specificThree: newClinic.specific.three,
        specificFour: newClinic.specific.four,
        specificFive: newClinic.specific.five,
        specificSix: newClinic.specific.six,
        email: newClinic.email,
      },
    });
  },
/*Clinic Method End*/

/*Pharmacie Method*/
  addPharmacie(pharmacie){
    check(pharmacie, Object);
    if (!Meteor.userId()) {
      throw  new Meteor.Error('No esta autorizado');
    }
    Pharmacies.insert({
      name: pharmacie.name,
      img: pharmacie.img,
      latitude: pharmacie.latitude,
      longitude:pharmacie.longitude,
      phone: pharmacie.phone,
      tag:pharmacie.tag,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  deletePharmacie(pharmacie){
    check(pharmacie, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('Unothorized user');
    }
    Pharmacies.remove(pharmacie._id);
  },
  editPharmacie(pharmacie, newPharmacie){
    check(pharmacie, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Pharmacies.update(pharmacie._id, {
      $set:{
        name: newPharmacie.name,
        img: newPharmacie.img,
        phone: newPharmacie.phone,
        createdAt: new Date(),
        user: Meteor.userId()
      },
    });
  },
/*Pharmacie Method End*/

/*Hospital Method*/
  addHospital(hospital){
    check(hospital, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Hospitals.insert({
      name: hospital.name,
      img: hospital.img,
      latitude: hospital.latitude,
      longitude:hospital.longitude,
      phone: hospital.phone,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  deleteHospital(hospital){
    check(hospital, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Hospitals.remove(hospital._id);
  },
  editHospital(hospital, newHospital){
    check(hospital, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
    Hospitals.update(hospital._id, {
      $set:{
        name: newHospital.name,
        img: newHospital.img,
        phone: newHospital.phone,
        latitude: hospital.latitude,
        longitude:hospital.longitude,
        createdAt: new Date(),
        user: Meteor.userId()
      },
    });
  },
/*Hospital Method End*/

  sendMessage(message){
    console.log(message);
  }
});
