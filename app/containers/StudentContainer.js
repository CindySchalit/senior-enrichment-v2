import Student from '../components/Student';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    selectedStudent: state.students.selectedStudent,
  }
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;
