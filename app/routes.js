import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import axios from 'axios';

import store from './store';

import Home from './components/Home';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';

import { receiveCampuses, getCampusById } from './action-creators/campuses';
import { receiveStudents, getStudentById } from './action-creators/students';

function onHomeEnter() {
  const gettingCampuses = axios.get('/api/campuses');
  const gettingStudents = axios.get('/api/students');

  return Promise
  .all([gettingCampuses, gettingStudents])
  .then(res => res.map(r => r.data))
  .then(([campuses, students]) => {
    store.dispatch(receiveCampuses(campuses));
    store.dispatch(receiveStudents(students));
  })
  .catch(err => console.log(err));
}

function onCampusEnter(nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
}

export default function Root () {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} onEnter={onHomeEnter} />
        <Route path="/campuses" component={CampusesContainer} />
        <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter} />
        <Route path="/students" component={StudentsContainer} />
    </Router>
  );
}
