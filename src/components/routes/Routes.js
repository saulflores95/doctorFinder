import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

//Example on how to import json import posts from '../../../blog-posts.json'

import DoctorWrapper from '../doctors/DoctorWrapper'
import DoctorRegistrationForm from '../doctors/DoctorRegistrationForm'
import DoctorDetail from '../doctors/DoctorDetail'
import DoctorEditForm from '../doctors/DoctorEditForm'

import ClinicRegistrationForm from '../clinics/ClinicRegistrationForm'
import ClinicWrapper from '../clinics/ClinicRegistrationForm'
import ClinicDetail from '../clinics/ClinicDetail'
import ClinicEditForm from '../clinics/ClinicEditForm'

import PharmacieWrapper from '../pharmacies/PharmacieWrapper'
import PharmacieRegistrationForm from '../pharmacies/PharmacieRegistrationForm'
import PharmaciesInformationWrapper from '../pharmacies/PharmaciesInformationWrapper'
import PharmacieDetail from '../pharmacies/PharmacieDetail'
import PharmacieEditForm from '../pharmacies/PharmacieEditForm'

import HospitalWrapper from '../hospitals/HospitalWrapper'
import HospitalRegistrationForm from '../hospitals/HospitalRegistrationForm'
import HospitalDetail from '../hospitals/HospitalDetail'
import HospitalEditForm from '../hospitals/HospitalEditForm'

import LabWrapper from '../laboratories/LabWrapper'
import LabRegistrationForm from '../laboratories/LabRegistrationForm'
import LabsInformationWrapper from '../laboratories/LabsInformationWrapper'
import LabDetail from '../laboratories/LabDetail'

import GeneralMap from './maps/GeneralMap'

import NotFound from '../notfound/NotFound'

/*
<Route exact path='/post/:slug' component={props => {
  const post = posts.posts.filter(post => props.match.params.slug === post.slug)
  return <PostDetail post={post[0]} />
}} />
*/

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <Home posts={posts.posts} />} />
    <Route exact path='/doctors' component={DoctorWrapper} />
    <Route exact path='/clinics' component={ClinicWrapper} />
    <Route exact path='/pharmacies' component={PharmacieWrapper} />
    <Route exact path='/hospitals' component={HospitalWrapper} />
    <Route exact path='/laboratories' component={LabWrapper} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
