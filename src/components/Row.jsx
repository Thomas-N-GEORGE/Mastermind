/* eslint-disable react/prop-types */

// Mastermind row component.
import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Hole from "./Hole";

const Row = (props) => {
  const { board } = useContext(GameContext);
  const pegList = board[props.rowId].rowContent.map((hole, index) => {
    return <Hole key={index} isActive={props.isActive} holeId={hole.holeId} />;
  });

  // Logging.
  useEffect(() => {
    if (props.isActive) console.log("active row id =", props.rowId, "\nboard =", board);
  }, [props.isActive, props.rowId, board]);

  return (
    <>
      <span
        style={{
          ...rowStyle,
          border: props.isActive ? "3px solid black" : "1px solid black",
        }}
      >
        {pegList}
      </span>
    </>
  );
};

const rowStyle = {
  display: "inline-block",
  border: "1px solid black",
};

export default Row;
