import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "../Styles/ResidentListModal.css";
import { fetchResident } from "../Services/Api";

const ResidentListModal = ({ planet, onClose }) => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentData = await Promise.all(
        planet.residents.map(async (residentUrl) => {
          return await fetchResident(residentUrl);
        })
      );
      setResidents(residentData);
      setLoading(false);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{planet.name} Resident Directory</h2>
        {loading ? (
          <Loader />
        ) : residents.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident, index) => (
                <tr key={index}>
                  <td>{resident.name}</td>
                  <td>{resident.height}</td>
                  <td>{resident.mass}</td>
                  <td>{resident.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{`Data is not avaialable in the datavase : )`}</p>
        )}
      </div>
    </div>
  );
};

export default ResidentListModal;
