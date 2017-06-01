import React from 'react';
import { Link } from 'react-router';

export default class Campuses extends React.Component {
  constructor(props) {
    super(props);

    this.deleteClickedCampus = this.deleteClickedCampus.bind(this);
  }

  deleteClickedCampus(campus) {
    this.props.removeCampus(campus);
  }

  render () {
    console.log('PROPS IN CAMPUSES: ', this.props);
    const campuses = this.props.campuses;

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
                    <button
                      className="btn btn-default btn-xs"
                      onClick={this.deleteClickedCampus.bind(this, c)}>
                    Click to Delete { c.name } Campus</button>
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
}

/*
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
*/
