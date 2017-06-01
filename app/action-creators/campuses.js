import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, ADD_CAMPUS } from '../constants';
import axios from 'axios';

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
