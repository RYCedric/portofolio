import React from "react";
import { FaDog, FaGamepad, FaRunning } from "react-icons/fa";
import { GiKatana } from "react-icons/gi";
import Title from "../Title";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <Title span="Mes" after="Intérêts" />
      <ul>
        <li className="hobby">
          <FaRunning /> <span>Randonnées</span>
        </li>
        <li className="hobby">
          <FaGamepad />
          <span>Gaming</span>
        </li>
        <li className="hobby">
          <FaDog />
          Club cannin
        </li>
        <li className="hobby">
          <GiKatana />
          Aikido
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
