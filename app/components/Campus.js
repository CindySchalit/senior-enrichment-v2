import React from 'react';

export default function Campus(props) {
  console.log('PROPS IN CAMPUS: ', props);
  const campus = props.selectedCampus;

  return (
    <div>
      <h2>{ campus.name }</h2>
      <img src={ campus.image } />
    </div>
  );
}
