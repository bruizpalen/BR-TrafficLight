import React from "react";

const LightSequential = ({ cyclingColor, color }) => {
  return (
    <div
      className={`circle m-1 bg-${color} ${
        cyclingColor === color ? "glow" : ""
      }`}
    ></div>
  );
};

export default LightSequential;
