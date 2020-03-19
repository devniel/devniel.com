/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';
import { Helmet } from 'react-helmet';

import Dail from '../components/Dail/Dail';
import { getDail } from '../actions/Dail.actions';

import GithubIcon from 'Assets/images/github.svg';
import TwitterIcon from 'Assets/images/twitter.svg';
import ResumeIcon from 'Assets/images/resume.svg';
import InstagramIcon from 'Assets/images/instagram.svg';
import LinkedInIcon from 'Assets/images/linkedin.svg';

import resumeFile from 'Assets/files/Daniel_Flores_Software-Engineer-IBM_Resume_2019_May.pdf';
import faviconAppleTouchIcon from 'Assets/favicon/apple-touch-icon.png';
import favicon32x32 from 'Assets/favicon/favicon-32x32.png';
import favicon16x16 from 'Assets/favicon/favicon-16x16.png';

// To be consider on static build.
import me from 'Assets/images/me.jpeg';
import meSocial from 'Assets/images/me-social.png';
import androidChrome192 from 'Assets/favicon/android-chrome-192x192.png';
import androidChrome512 from 'Assets/favicon/android-chrome-512x512.png';
import siteManifest from 'Assets/favicon/site.webmanifest';

import './Home.scss';

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
          <title>Daniel Flores ~ @devniel, making ideas happen.</title>
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
            <span className="Logo__subtitle">Daniel Flores</span>
          </div>
        </div>

        <div className="Home__body">
          <div className="Logo">
            <span className="Logo__title">devniel</span>
            <span className="Logo__subtitle">Daniel Flores</span>
          </div>
          <Dail status="making ideas happen" onClick={this.onDailClick} />
        </div>

        <div className="Home__footer">
          <div className="Home__footer-left">
            <BrowserView>
              A crafter building things with code
              <br />
              and full-stack software engineer @<strong>Criteo</strong>;<br />
              previously @<strong>IBM</strong>.
            </BrowserView>
            <MobileView>
              A crafter building things with code and full-stack software
              engineer @<strong>Criteo</strong>; previously @
              <strong>IBM</strong>.<br />
            </MobileView>
          </div>
          <div className="Home__footer-right">
            <div className="Home__footer-links">
              <div className="Home__footer-link">
                <a
                  href="https://github.com/devniel"
                  title="my github"
                  target="_blank">
                  <GithubIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a href={resumeFile} title="my resume" target="_blank">
                  <ResumeIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a
                  href="https://twitter.com/devniel"
                  title="my twitter"
                  target="_blank">
                  <TwitterIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a
                  href="https://instagram.com/devniel_/"
                  title="my instagram"
                  target="_blank">
                  <InstagramIcon />
                </a>
              </div>
              <div className="Home__footer-link">
                <a
                  href="https://www.linkedin.com/in/devniel/"
                  title="my linkedin"
                  target="_blank">
                  <LinkedInIcon />
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
