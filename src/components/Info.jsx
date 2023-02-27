import React from 'react';
import avatar from './../images/avatar.png';
import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <img className="avatar" src={avatar} alt="avatar of Antons Kims" />
      <h1 className="info-name">Antons Kims</h1>
      <h3 className="info-profession">Frontend Developer</h3>
      <a
        href="https://gkiant.github.io/rsschool-cv/"
        className="info-link"
        target="blank"
      >
        My profile
      </a>
      <div className="btn-container">
        <a
          href="mailto: antons.kims@gmail.com"
          id="email-btn"
          className="email-btn btn"
        >
          <span className="btn-icon email-icon"></span>Email
        </a>
        <a
          href="https://www.linkedin.com/in/antons-kims-781889177/"
          id="linkedin-btn"
          className="linkedin-btn btn"
          target="blank"
        >
          <span className="btn-icon linkedin-icon"></span>LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Info;
