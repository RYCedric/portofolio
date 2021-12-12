import React from "react";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/portfolio/ProjectList";
import Profile from "../Components/Profile";
import Title from "../Components/Title";

const Portfolio = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main className="portfolio">
        <Title span="Mes" after="Projets" />
        <p style={{ textAlign: "center" }}>
          Ci-dessous, quelques exemples de réalisations effectuées
        </p>
        <ProjectList />
      </main>
    </div>
  );
};

export default Portfolio;
