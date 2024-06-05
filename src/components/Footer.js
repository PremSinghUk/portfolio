import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
          <div className="location"> <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> 39, Dwarka sec 23</p>
              <p> Delhi</p>
            </div>
          </div>

          <div className="phone">
            <h4>  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +91 123456789 </h4>
          </div>

          <div className="email">
            <h4>  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              info@gmail.com </h4>
          </div>

        </div>
        <div className="right">
          <h4> About This Company</h4>
          <p>This Is Me Prem Singh. Full Stack Developer.
            I Enjoy New Project And Design Challenges</p>

          <div className="social">
            <Link to="https://github.com/PremSinghUk"> <FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} /></Link>

            <Link to="https://twitter.com/pskvssec2"><FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} /> </Link>
            <Link to="https://www.linkedin.com/in/prem-singh-ad/" target="_main"> <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} /> </Link>



          </div>

        </div>
      </div>


    </div>
  )
}

export default Footer
