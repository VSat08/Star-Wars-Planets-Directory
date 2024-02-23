import React from "react";
import "../Styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutOverlay"></div>
      <div className="container1">
        <h1 className="h">About Star Wars Planets Directory</h1>
        <h2 className="heading2">
          Welcome to the Star Wars Planets Directory, your ultimate guide to
          exploring the diverse worlds within the vast Star Wars universe. This
          web application is dedicated to providing detailed information about
          each planet, allowing you to delve into their unique characteristics
          and inhabitants. Mission Statement Our mission is to bring the wonder
          and fascination of the Star Wars galaxy closer to fans and enthusiasts
          alike. By leveraging the power of technology and the extensive data
          available through the Star Wars API (SWAPI), we aim to create an
          immersive experience that celebrates the rich lore and storytelling of
          this iconic franchise.
        </h2>
        <div className="credits">
          <p className="text-wrapper">satyam2001verma@gmail.com</p>
         
        </div> <p className="text-wrapper">India</p>
          <p className="text-wrapper">©Satyam Verma | 2024</p>
      </div>
    </div>
  );
};

export default About;
