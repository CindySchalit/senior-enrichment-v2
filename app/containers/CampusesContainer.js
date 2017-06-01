import Campuses from '../components/Campuses';
import { connect } from 'react-redux';
import { deleteCampus } from '../action-creators/campuses';

function mapStateToProps(state) {
  return {
    campuses: state.campuses.allCampuses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCampus: function(oldCampus) {
      console.log('Delete button clicked');
      const action = deleteCampus(oldCampus);
      dispatch(action);
    }
  }
}

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses);

export default CampusesContainer;
