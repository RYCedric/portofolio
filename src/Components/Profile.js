import React from "react";
import Typical from "react-typical";

import { ImFacebook, ImGithub, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Profile = () => {
  let descriptions = [
    "Développeur React",
    1000,
    "Créatif",
    1000,
    "Web Designer",
    1000,
  ];

  return (
    <div className="profile-container">
      <div className="info">
        <img src="./img/avatar.jpg" alt="user-pic" />
        <div className="details">
          <h3>Yves Cedric</h3>
          <p>
            <Typical loop={Infinity} wrapper="b" steps={descriptions} />
          </p>
          <div className="social-media">
            <ImFacebook />
            <ImTwitter />
            <ImGithub />
            <ImLinkedin2 />
          </div>
        </div>
      </div>
      <div className="profile-bottom">
        <Link to="#" className="btn">
          voir le CV
        </Link>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Profile;
