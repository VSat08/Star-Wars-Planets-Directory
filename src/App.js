import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Directory from "./Components/Directory";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { About } from "./Components/About";
import Developer from "./Components/Developer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Star-Wars-Planets-Directory/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/about" element={<About />} />
          <Route path="/dev" element={<Developer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
