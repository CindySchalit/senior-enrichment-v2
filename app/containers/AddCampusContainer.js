import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    addCampus: function(newCampus) {
      dispatch(addCampus(newCampus));
    },
  }
}

class AddCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCampus(this.state);
    this.setState({
      name: '',
      image: '',
    })
  }

  render() {
    return (
      <div>
        <AddCampus
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          campusName={this.state.name}
          campusImage={this.state.image}
        />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddCampusContainer);
