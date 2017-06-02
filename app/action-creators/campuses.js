import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, UPDATE_CAMPUS } from '../constants';
import axios from 'axios';
import { hashHistory } from 'react-router';

/* ----- ----- ----- Getting Campus(es) ----- ----- ----- */

export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses,
});

export const receiveCampus = campus => ({
  type: RECEIVE_CAMPUS,
  campus,
});

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
    .then(res => dispatch(receiveCampus(res.data)))
    .catch(err => console.log(err));
  }
}

/* ----- ----- ----- Adding a Campus ----- ----- ----- */

export const addCampus = newCampus => {
  return function (dispatch, getState) {
    axios.post('/api/add/campus', newCampus)
    .then (res => res.data)
    .then (campus => {
      const newListOfAllCampuses = getState().campuses.allCampuses.concat([campus]);
        dispatch(receiveCampuses(newListOfAllCampuses));
        hashHistory.push(`/campuses/${campus.id}`);
    })
    .catch(err => console.log(err));
  }
}

/* ----- ----- ----- Deleting a Campus ----- ----- ----- */

export const deleteCampus = function(campus) {
  return function(dispatch) {
    axios.delete(`/api/campuses/${campus.id}`)
    .then(res => res.data)
    .then(campusesMinusOne => {
      dispatch(receiveCampuses(campusesMinusOne));
    })
    .catch(err => console.log(err));
  }
}

/* ----- ----- ----- Updating a Campus ----- ----- ----- */

export const update = campus => ({
  type: UPDATE_CAMPUS,
  campus,
});

export const updateCampus = function(id, campus) {
  console.log('ID IN updateCampus: ', id);
  console.log('CAMPUS IN updateCampus: ', campus);
  return function(dispatch) {
    axios.put(`/api/edit/campuses/${id}`, campus)
    .then(res => res.data)
    .then(campus => {
      dispatch(update(campus));
    })
    .catch(err => console.log(err));
  }
}
