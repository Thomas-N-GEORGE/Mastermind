/* eslint-disable react/prop-types */

// Mastermind row component.
import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Hole from "./Hole";

const Row = (props) => {
  const { activeRow } = useContext(GameContext);

  const holes = [0, 1, 2, 3, 4, 5];

  // Logging.
  useEffect(() => {
    if (activeRow.id === props.id) console.log(activeRow);
  }, [activeRow, props.id]);

  return (
    <>
      <span
        style={{
          ...rowStyle,
          border: props.isActive ? "3px solid black" : "1px solid black",
        }}
      >
        {holes.map((hole, i) => (
          <Hole key={i} id={hole} isActive={props.isActive} />
        ))}
      </span>
    </>
  );
};

const rowStyle = {
  display: "inline-block",
  border: "1px solid black",
};

export default Row;
