import React from 'react';

import './NewScat.scss';

class NewScat extends React.Component {
  state = {
    scatLocation: '',
    scatColor: '',
    scatShape: '',
    scatSize: '',
    scatTemperature: 0,
    scatViscosity: '',
    scatWasFulfilling: false,
    scatNotes: '',
  }

  locationChange = (e) => {
    e.preventDefault();
    this.setState({ scatLocation: e.target.value });
  }

  colorChange = (e) => {
    e.preventDefault();
    this.setState({ scatColor: e.target.value });
  }

  shapeChange = (e) => {
    e.preventDefault();
    this.setState({ scatShape: e.target.value });
  }

  sizeChange = (e) => {
    e.preventDefault();
    this.setState({ scatSize: e.target.value });
  }

  temperatureChange = (e) => {
    e.preventDefault();
    this.setState({ scatTemperature: e.target.value });
  }

  viscosityChange = (e) => {
    e.preventDefault();
    this.setState({ scatViscosity: e.target.value });
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ scatNotes: e.target.value });
  }

  wasFulfillingChange = (e) => {
  // no need to do e.preventDefault on checkboxes!!!! Also note it's e.target.CHECKED!!
    this.setState({ scatWasFulfilling: e.target.checked });
  }

  render() {
    const {
      scatLocation,
      scatColor,
      scatShape,
      scatSize,
      scatTemperature,
      scatViscosity,
      scatWasFulfilling,
      scatNotes,
    } = this.state;

    return (
      <div className="NewScat col-12">
        <h1>New Scat Component</h1>

        <form className="col-6 offset-3">
          <div className="form-group">
            <label for="scat-location">Location</label>
            <input type="text" className="form-control" id="scat-location" value={scatLocation} onChange={this.locationChange} />
          </div>

          <div className="form-group">
            <label for="scat-color">Color</label>
            <input type="text" className="form-control" id="scat-color" value={scatColor} onChange={this.colorChange} />
          </div>

          <div className="form-group">
            <label for="scat-shape">Shape</label>
            <input type="text" className="form-control" id="scat-shape" value={scatShape} onChange={this.shapeChange} />
          </div>

          <div className="form-group">
            <label for="scat-size">Size</label>
            <input type="text" className="form-control" id="scat-size" value={scatSize} onChange={this.sizeChange} />
          </div>

          <div className="form-group">
            <label for="scat-temperature">Temperature</label>
            <input type="number" className="form-control" id="scat-temperature" value={scatTemperature} onChange={this.temperatureChange} />
          </div>

          <div className="form-group">
            <label for="scat-viscosity">Viscosity</label>
            <input type="text" className="form-control" id="scat-viscosity" value={scatViscosity} onChange={this.viscosityChange} />
          </div>

          <div className="form-group">
            <label for="scat-notes">Notes</label>
            <input type="text" className="form-control" id="scat-notes" value={scatNotes} onChange={this.notesChange} />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="scat-wasFulfilling" checked={scatWasFulfilling} onChange={this.wasFulfillingChange} />
            <label className="form-check-label" for="scat-wasFulfilling">Was it fulfilling?</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    );
  }
}

export default NewScat;
