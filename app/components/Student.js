import React from 'react';

export default function Student(props) {
  // console.log('PROPS IN STUDENT: ', props);
  const name = props.selectedStudent.name;
  const email = props.selectedStudent.email;

  return (
    <div>
      <h3>This is { name }'s Page.</h3>
      <p>You can reach { name } at { email }.</p>
    </div>
  )

}

