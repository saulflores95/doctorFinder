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
import ClinicEditForm from './clinics/ClinicEditForm.jsx';
import PharmacieWrapper from './pharmacies/PharmacieWrapper.jsx';
import PharmacieDetail from './pharmacies/PharmacieDetail.jsx';
import PharmacieRegistrationForm from './pharmacies/PharmacieRegistrationForm.jsx';
import PharmacieEditForm from './pharmacies/PharmacieEditForm.jsx';
import PharmacieSingleList from './pharmacies/PharmacieSingleList.jsx';
import PharmacieMap from './maps/PharmacieMap.jsx';
import PharmaciesInformationWrapper from './pharmacies/PharmaciesInformationWrapper.jsx';
import HospitalWrapper from './hospitals/HospitalWrapper.jsx';
import HospitalRegistrationForm from './hospitals/HospitalRegistrationForm.jsx';
import HospitalDetail from './hospitals/HospitalDetail.jsx';
import HospitalEditForm from './hospitals/HospitalEditForm.jsx';
import LabWrapper from './labs/LabWrapper.jsx';
import LabDetail from './labs/LabDetail.jsx';
import LabRegistrationForm from './labs/LabRegistrationForm.jsx';
import LabEditForm from './labs/LabEditForm.jsx';
import LabSingleList from './labs/LabSingleList.jsx';
import LabMap from './maps/LabMap.jsx';
import LabsInformationWrapper from './labs/LabsInformationWrapper.jsx';
import Uploader from './uploader/Uploader.jsx';

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

FlowRouter.route('/clinics/:id/edit', {
  action(params) {
    mount(MainLayout,{
      content: (<ClinicEditForm id={params.id} />),
    })
  }
});

FlowRouter.route('/pharmacies', {
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


FlowRouter.route('/pharmacies/:name', {
  action(params){
    mount(MainLayout,{
      content: (<PharmaciesInformationWrapper name={params.name} />),
    })
  }
});

FlowRouter.route('/pharmacies/:name/:id', {
  action(params){
    mount(MainLayout,{
      content: (<PharmacieDetail name={params.name} id={params.id} />),
    })
  }
});


FlowRouter.route('/pharmacies/:name/:id/edit', {
  action(params) {
    mount(MainLayout,{
      content: (<PharmacieEditForm id={params.id} />),
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

FlowRouter.route('/hospitals', {
  action() {
    mount(MainLayout,{
      content: (<HospitalWrapper />),
    })
  }
});

FlowRouter.route('/hospitalRegistration', {
  action() {
    mount(MainLayout,{
      content: (<HospitalRegistrationForm />),
    })
  }
});


FlowRouter.route('/hospitals/:id', {
  action(params){
    mount(MainLayout,{
      content: (<HospitalDetail id={params.id} />),
    })
  }
});

FlowRouter.route('/hospitals/:id/edit', {
  action(params) {
    mount(MainLayout,{
      content: (<HospitalEditForm id={params.id} />),
    })
  }
});


FlowRouter.route('/laboratories', {
  action() {
    mount(MainLayout,{
      content: (<LabWrapper />),
    })
  }
});

FlowRouter.route('/laboratoriesRegistration', {
  action() {
    mount(MainLayout,{
      content: (<LabRegistrationForm />),
    })
  }
});


FlowRouter.route('/laboratories/:name', {
  action(params){
    mount(MainLayout,{
      content: (<LabsInformationWrapper name={params.name} />),
    })
  }
});

FlowRouter.route('/laboratories/:name/:id', {
  action(params){
    mount(MainLayout,{
      content: (<LabDetail name={params.name} id={params.id} />),
    })
  }
});


FlowRouter.route('/uploader', {
  action(params) {
    mount(MainLayout,{
      content: (<Uploader />),
    })
  }
});
