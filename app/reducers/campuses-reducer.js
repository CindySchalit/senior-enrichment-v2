import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, UPDATE_CAMPUS } from '../constants';

const initialCampusesState = {
  allCampuses: [],
  selectedCampus: {},
}

export default function(state = initialCampusesState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CAMPUSES:
      newState.allCampuses = action.campuses;
      break;

    case RECEIVE_CAMPUS:
      newState.selectedCampus = action.campus;
      break;

    case UPDATE_CAMPUS:
      newState.allCampuses = state.allCampuses.map(campus => (action.campus.id === campus.id ? action.campus : campus));
      break;

    default:
      return state;
  }

  return newState;
}
