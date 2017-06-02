import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campus from '../components/Campus';
import { updateCampus } from '../action-creators/campuses';

function mapStateToProps(state) {
  return {
    selectedCampus: state.campuses.selectedCampus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newCampusInfo: function(id, campus) {
      dispatch(updateCampus(id, campus));
    }
  }
}

class CampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.newCampusInfo(this.props.selectedCampus.id, this.state);
    this.setState({
      name: '',
      image: '',
    });
  }

  render() {
    return (
      <div>
        <Campus
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newName={this.state.name}
          newImage={this.state.image}
          selectedCampus={this.props.selectedCampus}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusContainer);

