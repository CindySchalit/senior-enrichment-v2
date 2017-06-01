import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../constants';

const initialStudentsState = {
  allStudents: [],
  selectedStudent: {},
};

export default function(state = initialStudentsState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_STUDENTS:
      newState.allStudents = action.students;
      break;

    case RECEIVE_STUDENT:
      newState.selectedStudent = action.student;
      break;

    default:
      return state;
  }

  return newState;
}
