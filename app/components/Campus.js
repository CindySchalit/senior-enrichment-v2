import React from 'react';
import { Link } from 'react-router';

export default function Campus(props) {
  const campus = props && props.selectedCampus;
  const students = props.selectedCampus && props.selectedCampus.users;

  return (
    <div>
      <div>
        <h1>{ campus.name }</h1>
        <img src={ campus.image } />
        <h2>Students currently enrolled in { campus.name }:</h2>
        {
          students && students.map(s => (
            <div className="list-group-item" key={s.id}>
              <Link to={`/students/${s.id}`}>{ s.name }</Link>
            </div>
          ))
        }
      </div>
      <div>
        <h3>Edit { campus.name } Campus</h3>
        <form onSubmit={props.handleSubmit}>
          <ul>
            <li>
              <input
                placeholder='New Campus Name'
                onChange={props.handleChange}
                type='text'
                name='name'
                value={props.newName}
              />
            </li>
            <li>
              <input
                placeholder='New Campus Image'
                onChange={props.handleChange}
                type='text'
                name='image'
                value={props.newImage}
              />
            </li>
          </ul>
          <button
            type='submit'
            className="btn btn-warning btn-lg">
          Click to Edit</button>
        </form>
      </div>
    </div>
  );
}

