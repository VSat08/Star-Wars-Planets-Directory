// import React, { useState, useEffect } from "react";
// import ResidentList from "./ResidentList";
// import { fetchResident } from "../Services/Api";
// import "../Styles/PlanetCard.css";
 

// const PlanetCard = ({ planet }) => {
//   const [residents, setResidents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResidents = async () => {
//       const residentData = await Promise.all(
//         planet.residents.map(async (residentUrl) => {
//           return await fetchResident(residentUrl);
//         })
//       );
//       setResidents(residentData);
//       setLoading(false);
//     };

//     fetchResidents();
//   }, [planet.residents]);

//   return (
//     <div className="planet-card">
//       <h2>{planet.name}</h2>
//       <p>Climate: {planet.climate}</p>
//       <p>Population: {planet.population}</p>
//       <p>Terrain: {planet.terrain}</p>
//       <ResidentList residents={residents} loading={loading} />
//     </div>
//   );
// };

// export default PlanetCard;

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
