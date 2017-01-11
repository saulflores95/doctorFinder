import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import About from './About.jsx'
import DoctorRegistrationForm from './doctors/DoctorRegistrationForm.jsx';
import DoctorList from './doctors/DoctorList.jsx';
import DoctorDetail from './doctors/DoctorDetail.jsx';
import DoctorWrapper from './doctors/DoctorWrapper.jsx';
import DoctorEditForm from './doctors/DoctorEditForm.jsx';
import GeneralMap from './maps/GeneralMap.jsx';
import ClinicRegistrationForm from './clinics/ClinicRegistrationForm.jsx';
import ClinicWrapper from './clinics/ClinicWrapper.jsx';
import ClinicDetail from './clinics/ClinicDetail.jsx';
import PharmacieWrapper from './pharmacies/PharmacieWrapper.jsx';
import PharmacieDetail from './pharmacies/PharmacieDetail.jsx';
import PharmacieRegistrationForm from './pharmacies/PharmacieRegistrationForm.jsx';
import PharmacieMap from './maps/PharmacieMap.jsx';
import HospitalWrapper from './hospitals/HospitalWrapper.jsx';
import HospitalRegistrationForm from './hospitals/HospitalRegistrationForm.jsx';
import HospitalDetail from './hospitals/HospitalDetail.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout,{
      content: (<DoctorWrapper />),
    })
  }
});

FlowRouter.route('/doctors', {
  action() {
    mount(MainLayout,{
      content: (<DoctorWrapper />),
    })
  }
});

FlowRouter.route('/registerMD', {
  action() {
    mount(MainLayout,{
      content: (<DoctorRegistrationForm />),
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout,{
      content: (<About />),
    })
  }
});

FlowRouter.route('/map', {
  action() {
    mount(MainLayout,{
      content: (<GeneralMap />),
    })
  }
});

FlowRouter.route('/doctors/:id', {
  action(params) {
    mount(MainLayout,{
      content: (<DoctorDetail id={params.id} />),
    })
  }
});

FlowRouter.route('/doctors/:id/edit', {
  action(params) {
    mount(MainLayout,{
      content: (<DoctorEditForm id={params.id} />),
    })
  }
});


FlowRouter.route('/registerClinic', {
  action() {
    mount(MainLayout,{
      content: (<ClinicRegistrationForm />),
    })
  }
});

FlowRouter.route('/clinics', {
  action() {
    mount(MainLayout,{
      content: (<ClinicWrapper />),
    })
  }
});

FlowRouter.route('/clinics/:id', {
  action(params) {
    mount(MainLayout,{
      content: (<ClinicDetail id={params.id} />),
    })
  }
});


FlowRouter.route('/Pharmacies', {
  action() {
    mount(MainLayout,{
      content: (<PharmacieWrapper />),
    })
  }
});

FlowRouter.route('/pharmaciesRegistration', {
  action() {
    mount(MainLayout,{
      content: (<PharmacieRegistrationForm />),
    })
  }
});


FlowRouter.route('/Pharmacies/:id', {
  action(params){
    mount(MainLayout,{
      content: (<PharmacieDetail id={params.id} />),
    })
  }
});

FlowRouter.route('/Hospitals', {
  action() {
    mount(MainLayout,{
      content: (<HospitalWrapper />),
    })
  }
});

FlowRouter.route('/HospitalRegistration', {
  action() {
    mount(MainLayout,{
      content: (<HospitalRegistrationForm />),
    })
  }
});


FlowRouter.route('/Hospitals/:id', {
  action(params){
    mount(MainLayout,{
      content: (<HospitalDetail id={params.id} />),
    })
  }
});
