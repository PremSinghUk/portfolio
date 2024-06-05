import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import react3 from "../assets/react3.jpg";
import react2 from "../assets/react2.jpg";




const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> WHO AM I?</h1>
        <p>Im a WEB developer. I create resposnsive and secure websites for my clients</p>

        <Link to="/contact">
          <button className="btn"> CONTACT </button>
        </Link>

      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react3} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="true"></img>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutContent
