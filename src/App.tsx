import "./styles.css";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import RippleAnimation from "./ripple-animation";

const App: React.FC<{}> = () => {
  const waitValue = 10;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 0) {
      return;
    }
    setTimeout(() => {
      setCounter((preCounter) => preCounter - 1);
    }, 1000);
  }, [counter]);

  return (
    <>
      <RippleAnimation />
      <div className="App">
        <h1>Please wait {counter}</h1>
        <Button
          variant="contained"
          disabled={counter > 0}
          onClick={() => {
            setCounter(waitValue);
          }}
        >
          Run
        </Button>
      </div>
    </>
  );
};

export default App;
