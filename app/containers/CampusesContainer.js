import Campuses from '../components/Campuses';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    campuses: state.campuses.allCampuses,
  };
}

const CampusesContainer = connect(mapStateToProps)(Campuses);

export default CampusesContainer;