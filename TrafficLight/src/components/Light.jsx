import React from "react";

const Light = ({ handleClick, lightOn, color }) => {
  return (
    <div
      className={`circle m-1 bg-${color} ${lightOn ? "glow" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Light;
