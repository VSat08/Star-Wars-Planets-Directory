import React from "react";
import "../Styles/Developer.css";

const Developer = () => {
  return (
    <div className="developer">
      <div className="developerOve"></div>
      <div className="container">
        <h1 className="h">Hi!</h1>
        <h2 className="h-2">I developed this!</h2>
        <p className="p">My name is Satyam! Nice to meet you!</p>
        <p className="p-2">~UI/UX Designer and Web Developer</p>
        <div className="credits">
          <p className="text-wrapper">satyam2001verma@gmail.com</p>
          <p className="text-wrapper">India</p>
          <p className="text-wrapper">©Satyam Verma | 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
