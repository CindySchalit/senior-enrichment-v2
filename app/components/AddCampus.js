import React, { Component } from 'react';

export default class AddCampus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Add a Campus</h3>
        <form>
          <ul>
            <li>
              <input
                name='name'
                type='text'
                placeholder='Campus Name'
              />
            </li>
            <li>
              <input
                name='image'
                type='text'
                placeholder='Campus Image'
              />
            </li>
          </ul>
          <button
            type='submit'
            className="btn btn-warning btn-lg">
          Click to Add</button>
        </form>
      </div>
    )
  }
}
