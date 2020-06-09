import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import scatShape from '../../../helpers/propz/scatShape';

import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
    removeScat: PropTypes.func.isRequired,
  }

  render() {
    const { scat, removeScat } = this.props;
    const singleLink = `/scats/${scat.id}`;
    const editLink = `/edit/${scat.id}`;

    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <p className="card-text">{scat.notes}</p>
            <Link className="btn btn-success" to={singleLink}>View</Link>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={() => removeScat(scat.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
