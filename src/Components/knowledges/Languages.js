import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Css", xp: 0.9 },
      { id: 2, value: "Javascript", xp: 0.85 },
      { id: 3, value: "Php", xp: 0.5 },
      { id: 4, value: "Mysql", xp: 0.6 },
    ],
    frameworks: [
      { id: 1, value: "ReactJs", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 0.55 },
      { id: 3, value: "Sass", xp: 0.85 },
      { id: 4, value: "Material UI", xp: 0.65 },
    ],
  };

  render() {
    let { frameworks, languages } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="langagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
