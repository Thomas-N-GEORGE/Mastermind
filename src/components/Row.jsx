/* eslint-disable react/prop-types */

// Mastermind row component.
import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Hole from "./Hole";

const Row = () => {
  const { activeRow } = useContext(GameContext);
  
  useEffect(() => {
    console.log(activeRow);
}, [activeRow]);

  return (
    <>
      <span
        style={{
          ...rowStyle,
        }}
      >
        <Hole id={1} />
        <Hole id={2} />
        <Hole id={3} />
        <Hole id={4} />
        <Hole id={5} />
        <Hole id={6} />
      </span>
    </>
  );
};

const rowStyle = {
  display: "inline-block",
  border: "1px solid black",
};

export default Row;
