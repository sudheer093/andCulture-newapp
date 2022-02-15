import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TutorialsList from "./components/TutorialsList";
import ViewTutorial from "./components/ViewTutorial";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/breweries" className="navbar-brand">
          AndCulture
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/breweries"} className="nav-link">
              breweries
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList />} />
          <Route path="/breweries" element={<TutorialsList />} />
          <Route path={"/view/:id"} element={<ViewTutorial />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
