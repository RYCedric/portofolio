import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const User = () => {
  return (
    <>
      <Navigation />
      <div className="user">
        <img src="./img/avatar.jpg" alt="user-pic" />
        <h3>Yves Cédric</h3>
        <p>Développeur Web</p>
        <Link to="#">voir le CV</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default User;
