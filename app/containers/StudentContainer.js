import Student from '../components/Student';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log('STATE IN STUDENT CONTAINER: ', state);
  console.log('CAMPUS IN STUDENT CONTAINER: ', state.students.selectedStudent.campus);
  // console.log('CAMPUS NAME IN STUDENT CONTAINER: ', state.students.selectedStudent.campus.name);
  return {
    selectedStudent: state.students.selectedStudent,
  }
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;
