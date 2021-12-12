import React from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";

const Portfolio = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main>
        <h2>
          <span>Mes </span> Projets
        </h2>
        <p>Ci-dessous, quelques exemples de réalisations effectuées</p>
      </main>
    </div>
  );
};

export default Portfolio;
