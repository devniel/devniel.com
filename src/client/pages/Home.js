import React from 'react';
import ReactSVG from 'react-svg'

import './Home.scss';

import githubIcon from 'Assets/images/github.svg';
import linkedIcon from 'Assets/images/linkedin.svg';

const Home = () => (
  <div className="Home">
    <div className="Home__header">
      <div className="Logo">
        <span className="Logo__title">devniel</span>
        <span className="Logo__subtitle">just hack</span>
      </div>
    </div>

    <div className="Home__body">
      <div className="Logo">
        <span className="Logo__title">devniel</span>
        <span className="Logo__subtitle">just hack</span>
      </div>
    </div>
    
    <div className="Home__footer">
      <div className="Home__footer-left">
      a crafter building things with code,<br/>
      full-stack engineer @<strong>IBM</strong> working<br/>
      on many products.
      </div>
      <div className="Home__footer-left">
        <div className="Home__footer-links">
          <div className="Home__footer-link">
            <ReactSVG src={githubIcon} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default {
  component: Home,
};
