import "./styles.css";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import RippleAnimation from "./ripple-animation";

const App: React.FC<{}> = () => {
  return (
    <>
      <RippleAnimation />
    </>
  );
};

export default App;
