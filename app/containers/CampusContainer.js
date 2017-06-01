import Campus from '../components/Campus';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    selectedCampus: state.campuses.selectedCampus,
  }
}

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;
