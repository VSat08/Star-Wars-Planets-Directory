import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="left-section">
          <div className="text-wrapper">
            <img src={Logo} alt="Logo" width="55px" />
            Star Wars <span>Planet Directory</span>
          </div>
          <div className="hamburger" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className={`right-section ${sidebarOpen ? "open" : ""}`}>
          <Link to="/star-wars-planets-directory/" className="text-wrapper-2">
            Home
          </Link>
          <Link to="/directory" className="text-wrapper-2">
            Planets Directory
          </Link>
          <Link to="/about" className="text-wrapper-2">
            About
          </Link>
          <Link to="/dev" className="text-wrapper-2">
            Developer
          </Link>
        </div>
        {/* sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={() => setSidebarOpen(false)}>
            &times;
          </div>
          <div className="sidebar-content">
            <Link
              to="/star-wars-planets-directory/"
              className="text-wrapper-2 sidebarLinks"
            >
              Home
              <span className="material-symbols-outlined">trending_up</span>
            </Link>
            <Link to="/directory" className="text-wrapper-2 sidebarLinks">
              Planets Directory
              <span className="material-symbols-outlined">trending_up</span>
            </Link>
            <Link to="/about" className="text-wrapper-2 sidebarLinks">
              About
              <span className="material-symbols-outlined">trending_up</span>
            </Link>
            <Link to="/dev" className="text-wrapper-2 sidebarLinks">
              Developer
              <span className="material-symbols-outlined">trending_up</span>
            </Link>
          </div>
          <div className="nav-footer">
            <code>&#169;Satyam Verma |2024</code>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
