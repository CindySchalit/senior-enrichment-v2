import React from 'react';
import { Link } from 'react-router';

export default function Campuses(props) {
  console.log('PROPS IN CAMPUSES: ', props);
  const campuses = props.campuses;

  return (
    <div>
      <h2>Campuses</h2>
      <div className="row">
      {
        campuses && campuses.map(c => (
          <div className="col-xs-4" key={ c.id }>
            <Link className="thumbnail" to={`campuses/${c.id}`}>
              <img src={ c.image } />
              <div className="caption">
                <h3>
                  <span>{ c.name }</span>
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
