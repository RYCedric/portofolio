import React from "react";

const Title = ({ span, after }) => {
  return (
    <div className="gradient-box">
      <h3>
        <span>{span}</span> {after}
      </h3>
    </div>
  );
};

export default Title;
