import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addCampus } from '../action-creators/campuses';

export default class AddCampusContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
    }
  }

  render() {
    return (
      <div>
        <AddCampus/>
      </div>
    )
  }
}
