import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Project = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);

  let { name, languagesIcons, source, info, picture } = item;
  return (
    <div className="project">
      <div className="icons">
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <img
        src={picture}
        alt="project-pic"
        onClick={() => setShowInfo(!showInfo)}
      />
      <span className="infos" onClick={() => setShowInfo(!showInfo)}>
        <BsFillPlusCircleFill />
      </span>
      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <a
                href={source}
                rel="noopener noreferrer"
                target="_blank"
                className="button"
              >
                Code source
              </a>
            </div>
            <p className="text">{info}</p>
            <button
              className="button return"
              onClick={() => setShowInfo(!showInfo)}
            >
              Retourner sur la page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
