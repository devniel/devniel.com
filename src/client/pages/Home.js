import React from 'react';
import ReactSVG from 'react-svg'

import './Home.scss';

import githubIcon from 'Assets/images/github.svg';
import linkedIcon from 'Assets/images/linkedin.svg';
import twitterIcon from 'Assets/images/twitter.svg';
import instagramIcon from 'Assets/images/instagram.svg';
import resumeIcon from 'Assets/images/resume.svg';
import resumeFile from 'Assets/files/Daniel_Flores_Resume_January_2019.pdf';

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
      a crafter building things with code<br/>
      and full-stack engineer @<strong>IBM</strong>,<br/>
      working on many products.
      </div>
      <div className="Home__footer-right">
        <div className="Home__footer-links">
          <div className="Home__footer-link">
            <a href="https://github.com/devniel" title='Github'>
              <ReactSVG src={githubIcon} />
            </a>
          </div>
          <div className="Home__footer-link">
            <a href={resumeFile} title='Resume'>
              <ReactSVG src={resumeIcon} />
            </a>
          </div>
          <div className="Home__footer-link">
            <a href="https://www.linkedin.com/in/devniel/" title='LinkedIn'>
              <ReactSVG src={linkedIcon} />
            </a>
          </div>
          <div className="Home__footer-link" title='Twitter'>
            <a href="https://twitter.com/devniel">
              <ReactSVG src={twitterIcon} />
            </a>
          </div>
          <div className="Home__footer-link">
            <a href="https://www.instagram.com/devniel_" title='Instagram'>
              <ReactSVG src={instagramIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default {
  component: Home,
};
