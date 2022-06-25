import React from "react";

const Details = ({ title, text }) => {
  return (
    <div className="container mt-3 no-pl">
      <div className="col">{title}</div>
      <div className="col">
        <b>{text}</b>
      </div>
    </div>
  );
};

export default Details;
