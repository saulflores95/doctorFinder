import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import About from './About.jsx'
import DoctorRegistrationForm from './doctors/DoctorRegistrationForm.jsx';
import DoctorList from './doctors/DoctorList.jsx';
import DoctorDetail from './doctors/DoctorDetail.jsx';
import DoctorWrapper from './doctors/DoctorWrapper.jsx';
import GeneralMap from './maps/GeneralMap.jsx';
import ClinicRegistrationForm from './clinics/ClinicRegistrationForm.jsx';
import ClinicWrapper from './clinics/ClinicWrapper.jsx';

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
