import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Title from "../Title";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <Title span="Autres" after="compétences" />
      <div className="list">
        <ul>
          <li>
            <BsFillCheckSquareFill />
            Français courant
          </li>
          <li>
            <BsFillCheckSquareFill />
            Github
          </li>
          <li>
            <BsFillCheckSquareFill />
            SEO
          </li>
          <li>
            <BsFillCheckSquareFill />
            Méthodes agiles
          </li>
        </ul>
        <ul>
          <li>
            <BsFillCheckSquareFill />
            Figma
          </li>
          <li>
            <BsFillCheckSquareFill />
            UI/UX Design
          </li>
          <li>
            <BsFillCheckSquareFill />
            Photoshop/Illustrator
          </li>
          <li>
            <BsFillCheckSquareFill />
            Montage Vidéo
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
