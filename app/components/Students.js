import React from 'react';
import { Link } from 'react-router';

export default function Students(props) {
  const students = props.students;

  return (
    <div>
      <h2>Students</h2>
      <div className="list-group">
        {
          students && students.map(s => (
            <div className="list-group-item" key={s.id}>
              <Link to={`/students/${s.id}`}>{ s.name }</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
