import React, { useState } from "react";

import { ImBriefcase, ImFileText, ImMail3, ImUser } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  const nav = (
    <div className="links">
      <div className="link">
        <Link to="/" activeclassname="active">
          <ImUser />
          A-propos
        </Link>
      </div>
      <div className="link">
        <Link to="/competences" activeclassname="active">
          <ImFileText />
          Competences
        </Link>
      </div>
      <div className="link">
        <Link to="/portfolio" activeclassname="active">
          <ImBriefcase />
          Portfolio
        </Link>
      </div>
      <div className="link">
        <Link to="/contact" activeclassname="active">
          <ImMail3 />
          Contact
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="sidebar">
      <div className="hamburger" onClick={handleShow}>
        <GiHamburgerMenu />
      </div>
      <div className="show">{showNav && nav}</div>
    </nav>
  );
};

export default Navigation;
