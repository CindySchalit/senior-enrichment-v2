import React from 'react';

export default function Student(props) {
  console.log('PROPS IN STUDENT: ', props);
  const name = props.selectedStudent.name;
  const email = props.selectedStudent.email;

  return (
    <div>
      <h3>This is { name }'s Page.</h3>
      <h4>You can reach { name } at { email }.</h4>
    </div>
  )

}

