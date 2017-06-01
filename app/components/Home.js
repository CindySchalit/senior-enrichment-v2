import React from 'react';
import { Link } from 'react-router';

export default function Home({children}) {
  return (
    <div>
      <h2>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript!</h2>
      <div>
        <Link className="thumbnail" to='/campuses'>All Campuses</Link>
      </div>
      <div>
        <Link className="thumbnail" to='students'>All Students</Link>
      </div>
      <div className="col-xs-10">
        { children }
      </div>
    </div>
  );
}



