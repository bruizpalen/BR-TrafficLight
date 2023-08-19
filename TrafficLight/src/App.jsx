import React from "react";
import BackSquare from "./components/BackSquare";
import Light from "./components/Light";
import { useState, useEffect } from "react";

function App() {
  const [lightOnSuccess, setLightOnSuccess] = useState(false);
  const [lightOnDanger, setLightOnDanger] = useState(false);
  const [lightOnWarning, setLightOnWarning] = useState(false);

  const handleLightOn = (color) => {
    setLightOnSuccess(color === "success");
    setLightOnDanger(color === "danger");
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
      </BackSquare>
    </>
  );
}

export default App;
