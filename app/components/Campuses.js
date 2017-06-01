import React from 'react';
import { Link } from 'react-router';

export default function Campuses(props) {
  const campuses = props.campuses;

  return (
    <div>
      <h2>All Campuses</h2>
      <Link to={`/add/campus`}>ADD A NEW CAMPUS</Link>
      <div className="row">
      {
        campuses && campuses.map(c => (
          <div className="col-xs-4" key={ c.id }>
            <Link className="thumbnail" to={`campuses/${c.id}`}>
              <img src={ c.image } />
              <div className="caption">
                <h3>
                  <span>Click here for more information on { c.name } Campus.</span>
                </h3>
              </div>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
}
