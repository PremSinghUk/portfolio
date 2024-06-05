import "./HeroImgStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/IntroImg.avif";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" ></img>
      </div>

      <div className="content">
        <p>HI, I AM PREM SINGH</p>
        <h1> WEB Developer</h1>
        <div>
          <Link to="/Services" className="btn"> Services
          </Link>
          <Link to="/contact" className="btn btn-light"> Contact
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImg
