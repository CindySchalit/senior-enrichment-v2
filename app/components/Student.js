import React from 'react';
import { Link } from 'react-router';

export default function Student(props) {
  const name = props.selectedStudent.name;
  const email = props.selectedStudent.email;
  const campusName = props.selectedStudent.campus && props.selectedStudent.campus.name;
  const campusId = props.selectedStudent.campusId;

  return (
    <div>
      <h3>This is { name }'s Page.</h3>
      <p>You can reach { name } at { email }.  { name } is a student at { campusName } Campus.</p>
      <p>For more information on { campusName } Campus, please click here.
          <Link className="thumbnail" to={`campuses/${campusId}`}>More Info</Link>
      </p>

    </div>
  )
}
