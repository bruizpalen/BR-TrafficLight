import React from "react";
import BackSquare from "./components/BackSquare";
import Light from "./components/Light";
import LightSequential from "./components/LightSequential";
import { useState, useEffect } from "react";

function App() {
  const [lightOnSuccess, setLightOnSuccess] = useState(false);
  const [lightOnDanger, setLightOnDanger] = useState(false);
  const [lightOnWarning, setLightOnWarning] = useState(false);
  const [lightOnPurple, setLightOnPurple] = useState(false);
  const [additionalLight, setAdditionalLight] = useState(false);
  const [feria, setFeria] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [colorFeria, setColorFeria] = useState("");

  const handleLightOn = (color) => {
    setLightOnSuccess(color === "success");
    setLightOnDanger(color === "danger");
    setLightOnWarning(color === "warning");
    setLightOnPurple(color == "purple");
  };

  const colorsFeria = ["success", "danger", "warning"];
  const colorChangeInterval = 1000;

  useEffect(() => {
    if (feria) {
      const intervalId = setInterval(() => {
        const nextColorIndex = (colorIndex + 1) % colorsFeria.length;
        setColorIndex(nextColorIndex);
        setColorFeria(colorsFeria[colorIndex]);
        setCounter((prevCounter) => prevCounter + 1);
      }, colorChangeInterval);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [feria, colorIndex]);

  return (
    <>
      <div>
        <button className="btn btn-danger" onClick={() => setFeria(!feria)}>
          Luces de feria
        </button>
      </div>
      {!feria ? (
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
      ) : (
        <>
          <BackSquare>
            <LightSequential cyclingColor={colorFeria} color={"success"} />
            <LightSequential cyclingColor={colorFeria} color={"danger"} />
            <LightSequential cyclingColor={colorFeria} color={"warning"} />
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
        </>
      )}
    </>
  );
}

export default App;
