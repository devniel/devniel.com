import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import './Dail.scss';
import dailIcon from 'Assets/dail/icon.svg';

class Dail extends Component {
  render() {
    const { status } = this.props;

    return (
      <div className="Dail">
        <div className="Dail__image">
          <ReactSVG src={dailIcon} className="Dail__image-svg" />
        </div>
        <div className="Dail__status">{status}</div>
      </div>
    );
  }
}

export default Dail;
