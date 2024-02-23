import React from "react";
import "../Styles/PlanetCard.css";

const PlanetCard = ({ planet, onShowResidentList }) => {
  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <button onClick={onShowResidentList}>Show Directory</button>
    </div>
  );
};

export default PlanetCard;
