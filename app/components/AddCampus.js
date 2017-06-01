import React from 'react';

function AddCampus(props) {
  return (
    <div>
      <h3>Add a Campus</h3>
      <form onSubmit={props.handleSubmit}>
        <ul>
          <li>
            <input
              placeholder='Campus Name'
              onChange={props.handleChange}
              type='text'
              name='name'
              value={props.campusName}
            />
          </li>
          <li>
            <input
              placeholder='Campus Image'
              onChange={props.handleChange}
              type='text'
              name='image'
              value={props.campusImage}
            />
          </li>
        </ul>
        <button
          type='submit'
          className="btn btn-warning btn-lg">
        Click to Add</button>
      </form>
    </div>
  );
}

export default AddCampus;
