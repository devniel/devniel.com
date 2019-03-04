import React, { Component } from 'react';
import Utils from '../../utils';
import './Dail.scss';
import DailIcon from 'Assets/dail/icon.svg';

class Dail extends Component {
  render() {
    const { status, onClick } = this.props;

    return (
      <div
        className="Dail"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyUp={e => Utils.isEnterKeyPress(e) && onClick()}>
        <div className="Dail__image">
          <DailIcon />
        </div>
        <div className="Dail__status">{status}</div>
      </div>
    );
  }
}

export default Dail;
