import React from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";

const Home = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
