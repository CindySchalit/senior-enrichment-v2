import React from 'react';

export default function Student(props) {
  const name = props.selectedStudent.name;
  const email = props.selectedStudent.email;
  const campus = props.selectedStudent.campus && props.selectedStudent.campus.name;

  return (
    <div>
      <h3>This is { name }'s Page.</h3>
      <p>You can reach { name } at { email }.</p>
      <p>{ name } is a student at { campus }.</p>
    </div>
  )
}
