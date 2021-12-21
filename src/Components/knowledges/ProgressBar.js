import React from "react";
import Title from "../Title";

const ProgressBar = ({ title, languages, className }) => {
  return (
    <div className={className}>
      <Title span="Les" after={title} />
      <div className="percentage">
        <span>Connaisances</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      <div>
        {languages.map((item) => {
          let progressBar = item.xp * 100 + "%";
          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
