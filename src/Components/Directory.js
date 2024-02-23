import React, { useState, useEffect } from "react";
import PlanetCard from "../Components/PlanetCard";
import Pagination from "../Components/Pagination";
import ProgressBar from "../Components/ProgressBar"; // Import the new ProgressBar component
import ResidentListModal from "../Components/ResidentListModal"; // Import the new ResidentListModal component
import { fetchPlanets } from "../Services/Api";
import "../Styles/Directory.css";

const Directory = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://swapi.dev/api/planets/?format=json"
  );
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true); // State for overall App loading
  const [showResidentListModal, setShowResidentListModal] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetsData = async () => {
      const data = await fetchPlanets(currentPageUrl);
      setPlanets(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchPlanetsData();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  const handleShowResidentList = (planet) => {
    setSelectedPlanet(planet);
    setShowResidentListModal(true);
  };

  const handleCloseResidentListModal = () => {
    setShowResidentListModal(false);
    setSelectedPlanet(null);
  };
  return (
    <div className="directory">
      {loading ? ( // Render ProgressBar if loading state is true
        <ProgressBar />
      ) : (
        <div className="content">
          <div className="planet-list">
            {planets.map((planet, index) => (
              <PlanetCard
                key={index}
                planet={planet}
                onShowResidentList={() => handleShowResidentList(planet)}
              />
            ))}
          </div>
          <Pagination
            nextPageUrl={nextPageUrl}
            prevPageUrl={prevPageUrl}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
          />
          {showResidentListModal && (
            <ResidentListModal
              planet={selectedPlanet}
              onClose={handleCloseResidentListModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Directory;
