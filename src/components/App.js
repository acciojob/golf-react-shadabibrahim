import React from "react";
import "../styles/App.css";

const App = () => {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [pixelToMove, setPixelToMove] = React.useState(0);

  const buttonClickHandler = () => {
    setIsButtonClicked(true);
    setPixelToMove((prev) => prev + 5);
  };

  const handleKeydown = (e) => {
    if (e.key === "ArrowRight" && e.keyCode === 39) {
      setPixelToMove((prev) => prev + 5);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [pixelToMove]);

  let jsx;
  if (isButtonClicked)
    jsx = <div style={{ left: pixelToMove + "px" }} className="ball"></div>;
  else
    jsx = (
      <button onClick={buttonClickHandler} className="start">
        Start
      </button>
    );

  return <div className="playground">{jsx}</div>;
};

export default App;