import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addCampus } from '../action-creators/campuses';
import axios from 'axios';

export default class AddCampusContainer extends Component {
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
    addCampus(this.state);
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
