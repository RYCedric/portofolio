import React from "react";

import { ImBriefcase, ImFileText, ImMail3, ImUser } from "react-icons/im";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <ImUser />
            A-propos
          </Link>
        </li>
        <li>
          <Link to="/competences">
            <ImFileText />
            Competences
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <ImBriefcase />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <ImMail3 />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
