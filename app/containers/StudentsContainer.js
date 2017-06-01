import Students from '../components/Students';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    students: state.students.allStudents,
  };
}

const StudentsContainer = connect(mapStateToProps)(Students);

export default StudentsContainer;
