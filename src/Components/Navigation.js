import React from "react";

import { ImBriefcase, ImFileText, ImMail3, ImUser } from "react-icons/im";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sidebar">
      <div className="show">
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
      </div>
    </nav>
  );
};

export default Navigation;
