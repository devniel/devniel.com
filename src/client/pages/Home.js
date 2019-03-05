import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';

import Dail from '../components/Dail/Dail';
import { getDail } from '../actions/Dail.actions';

import './Home.scss';

import GithubIcon from 'Assets/images/github.svg';
import LinkedIcon from 'Assets/images/linkedin.svg';
import TwitterIcon from 'Assets/images/twitter.svg';
import InstagramIcon from 'Assets/images/instagram.svg';
import ResumeIcon from 'Assets/images/resume.svg';
// eslint-disable-next-line no-unused-vars
import me from 'Assets/images/me.jpeg';
import resumeFile from 'Assets/files/Daniel_Flores_Resume_2019_March.pdf';

import faviconAppleTouchIcon from 'Assets/favicon/apple-touch-icon.png';
import favicon32x32 from 'Assets/favicon/favicon-32x32.png';
import favicon16x16 from 'Assets/favicon/favicon-16x16.png';

// eslint-disable-next-line no-unused-vars
import androidChrome192 from 'Assets/favicon/android-chrome-192x192.png';
// eslint-disable-next-line no-unused-vars
import androidChrome512 from 'Assets/favicon/android-chrome-512x512.png';

import siteManifest from 'Assets/favicon/site.webmanifest';

export class Home extends Component {
  onDailClick = () => {
    const { dispatch } = this.props;
    dispatch(getDail());
  };

  render() {
    return (
      <div className="Home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>devniel ⏤ just hack</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={faviconAppleTouchIcon}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
          <link rel="manifest" href={siteManifest} />
        </Helmet>

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
          <Dail status="programming" onClick={this.onDailClick} />
        </div>

        <div className="Home__footer">
          <div className="Home__footer-left">
            a crafter building things with code
            <br />
            and full-stack engineer @<strong>IBM</strong>,<br />
            working on many products.
          </div>
          <div className="Home__footer-right">
            <div className="Home__footer-links">
              <div className="Home__footer-link">
                <a href="https://github.com/devniel" title="Github">
                  <GithubIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a href={resumeFile} title="Resume">
                  <ResumeIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a href="https://www.linkedin.com/in/devniel/" title="LinkedIn">
                  <LinkedIcon />
                </a>
              </div>
              <div className="Home__footer-link" title="Twitter">
                <a href="https://twitter.com/devniel">
                  <TwitterIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a href="https://www.instagram.com/devniel_" title="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps)(Home),
};
