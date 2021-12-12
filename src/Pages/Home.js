import React from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";

const Home = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main>
        <section>
          <h2>
            <span>A propos </span> de Moi
          </h2>
          <p>
            Bonjour, je m’appelle Yves Cédric, développeur Web junior.
            <br /> [ ...à remplir... ] <br />
            J’ai profité du retour à mon Alsace natale pour effectuer une
            reconversion professionnelle dans le Développement Web, domaine qui
            m’intéresse depuis de nombreuses années. J’ai donc suivi la
            formation Développeur au sein de Nir'Info.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
