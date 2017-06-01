import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import axios from 'axios';

import store from './store';

import Home from './components/Home';
import CampusesContainer from './containers/CampusesContainer';

import { receiveCampuses, getCampusById } from './action-creators/campuses';

function onHomeEnter() {
  const gettingCampuses = axios.get('/api/campuses');
  // need to add gettingStudents upon setting up same

  return Promise
  .all([gettingCampuses]) // need to add students
  .then(res => res.map(r => r.data))
  .then(([campuses]) => { // need to add students
    store.dispatch(receiveCampuses(campuses));  // need to add students
  })
  .catch(err => console.log(err));
}

export default function Root () {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} onEnter={onHomeEnter} />
        <Route path="/campuses" component={CampusesContainer} />
    </Router>
  );
}
