// Home.js
import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="title">Star Wars Planets Directory</h1>
        <button className="explore-button">
          <Link to="/directory" className="buttonLinks">
            Explore Planets
          </Link>
          <span
            class="material-symbols-outlined"
            style={{ transform: "scale(1.3)" }}
          >
            trending_up
          </span>
        </button>
        <div className="col">
          <p className="caption">
            <span className="span">Embark </span>
            <span className="text-wrapper">
              on a galactic journey through the Star Wars universe as we unveil
              the mysteries of each planet and introduce you to its illustrious
              inhabitants. Welcome to the ultimate Star Wars Planet Directory,
              where every world holds untold stories and legendary figures
              waiting to be discovered!
            </span>
          </p>
          <div className="rightcol">
            <p className="info">
              This directory will not only feature information about each planet
              but also list its notable residents!
            </p>
          </div>
        </div>
        <div className="footer">
          <code></code>
          <code>&#169;Satyam verma</code>
          <code>|2024</code>
        </div>
      </div>
    </div>
  );
};

export default Home;
