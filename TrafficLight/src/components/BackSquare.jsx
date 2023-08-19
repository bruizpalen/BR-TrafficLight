import React from "react";

const BackSquare = ({ children }) => {
  return (
    <div className="container mt-5 flex-column p-3 d-flex align-items-center justify-content-center position-relative">
      <div className="upper bg-black align-items-center d-flex justify-content-center"></div>
      <div className="lower bg-black align-items-center d-flex justify-content-center flex-column p-3 ">
        {children}
      </div>
    </div>
  );
};

export default BackSquare;
