import React from "react";
import BackSquare from "./components/BackSquare";
import Light from "./components/Light";
import { useState } from "react";

function App() {
  const [lightOnSuccess, setLightOnSuccess] = useState(false);
  const [lightOnDanger, setLightOnDanger] = useState(false);
  const [lightOnWarning, setLightOnWarning] = useState(false);
  const [lightOnPurple, setLightOnPurple] = useState(false);
  const [additionalLight, setAdditionalLight] = useState(false);

  const handleLightOn = (color) => {
    setLightOnSuccess(color === "success");
    setLightOnDanger(color === "danger");
    setLightOnWarning(color === "warning");
    setLightOnPurple(color == "purple");
  };
  return (
    <>
      <BackSquare>
        <Light
          handleClick={() => handleLightOn("success")}
          lightOn={lightOnSuccess}
          color={"success"}
        />
        <Light
          handleClick={() => handleLightOn("danger")}
          lightOn={lightOnDanger}
          color={"danger"}
        />
        <Light
          handleClick={() => handleLightOn("warning")}
          lightOn={lightOnWarning}
          color={"warning"}
        />
        {additionalLight && (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Light
              handleClick={() => handleLightOn("purple")}
              lightOn={lightOnPurple}
              color={"purple"}
            />
          </div>
        )}
      </BackSquare>
      <div className="d-flex align-items-center justify-content-center">
        {additionalLight ? (
          <button
            className="btn btn-primary text-white mt-2"
            onClick={() => setAdditionalLight(false)}
          >
            Click to remove additional light
          </button>
        ) : (
          <button
            className="btn btn-primary d-flex"
            onClick={() => setAdditionalLight(true)}
          >
            Click to add additional light
          </button>
        )}
      </div>
    </>
  );
}

export default App;

{
  /* <div className="d-flex justify-content-center align-items-center">
{additionalLight ? (
  <div className="d-flex flex-column justify-content-center align-items-center">
    <Light
      handleClick={() => handleLightOn("purple")}
      lightOn={lightOnPurple}
      color={"purple"}
    />
    <button
      className="btn bg-purple text-white mt-2"
      onClick={() => setAdditionalLight(false)}
    >
      Click to remove purple button
    </button>
  </div>
) : (
  
)}
</div> */
}
