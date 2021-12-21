import React from "react";

const Details = ({ param1, value }) => {
  return (
    <p>
      <h5>{param1}</h5> <span>.....</span> <h6>{value}</h6>
    </p>
  );
};

export default Details;
