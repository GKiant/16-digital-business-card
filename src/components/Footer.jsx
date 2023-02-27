import React from 'react';
import twitterIcon from './../images/twitter-icon.png';
import facebookIcon from './../images/facebook-icon.png';
import instagramIcon from './../images/instagram-icon.png';
import githubIcon from './../images/github-icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="socials">
        <li>
          <a href="https://twitter.com/g_kiant" target="blank">
            <img className="social-icon" src={twitterIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/anton.kim.10420/" target="blank">
            <img className="social-icon" src={facebookIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://time.com/4793331/instagram-social-media-mental-health/"
            target="blank"
          >
            <img className="social-icon" src={instagramIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/GKiant" target="blank">
            <img className="social-icon" src={githubIcon} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
