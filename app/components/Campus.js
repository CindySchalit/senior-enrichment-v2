import React from 'react';
import { Link } from 'react-router';

export default function Campus(props) {
  const campus = props.selectedCampus;
  const students = campus.users;

  return (
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
  );
}

