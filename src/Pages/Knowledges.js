import React from "react";
import Experiences from "../Components/knowledges/Experiences";
import Hobbies from "../Components/knowledges/Hobbies";
import Languages from "../Components/knowledges/Languages";
import OtherSkills from "../Components/knowledges/OtherSkills";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";

const Knowledges = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main className="knowledges">
        <Experiences />
        <Languages />
        <OtherSkills />
        <Hobbies />
      </main>
    </div>
  );
};

export default Knowledges;
