import React from 'react';

import scatsData from '../../../helpers/data/scatsData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }
  // Note: our scat object shape does not match (the object in this file does not include the id - like the shape in the scatSHape file - we have not pushed the id in here - but it doesn't matter because it is in state here; it is not props, so we don't need the shape)

  componentDidMount() {
    // scatId is in our url - and thus in our params - we defiend it int he url and defined the variable name in the wildcard in the edit path in ASpp.js
    const { scatId } = this.props.match.params;
    scatsData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat: ', err));
  }

  render() {
    const { scat } = this.state;

    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <h4>{scat.location}</h4>
        <h4>Notes: {scat.notes}</h4>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Location: {scat.location}</p>
        <p>Was it fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default SingleScat;
