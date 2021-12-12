import React from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";
import Title from "../Components/Title";

const Contact = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main>
        <Title span="Me" after="Contacter" />
      </main>
    </div>
  );
};

export default Contact;
