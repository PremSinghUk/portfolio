import React from 'react';
import "./WorkCardStyles.css";

const WorkCard = () => {
  return (
    <div className="colorful-services">
      <h2>Explore our vibrant and diverse range of services</h2>
      <div id='services1' className="service-item">
        <h3>Web Development</h3>
        <p>
          Let us build your web presence with our expert team of developers.
        </p>
      </div>
      <div className="service-item" id='services' >
        <h3>Mobile App Development</h3>
        <p>
          We'll create a stunning mobile app for your business that your
          customers will love.
        </p>
      </div>
      <div className="service-item" id='services3' >
        <h3>Custom Solutions</h3>
        <p>
          We'll work with you to create custom solutions that meet your unique
          business needs.
        </p>
      </div>
    </div>
  );
};

export default WorkCard;