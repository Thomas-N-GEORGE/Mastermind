/* eslint-disable react/prop-types */

// Mastermind row component.
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import EvalHole from "../Hole/EvalHole";

const EvalRow = (props) => {
  const { evalBoard } = useContext(GameContext);
  const evalHoleList = evalBoard[props.rowId].rowContent.map((hole, index) => {
    return (
      <EvalHole
        key={index}
        holeId={hole.holeId}
        holeContent={hole.holeContent}
        // isActive={props.isActive}
      />
    );
  });

  // Logging.
  useEffect(() => {
    if (props.isActive)
      console.log("active row id =", props.rowId, "\nevalBoard =", evalBoard);
  }, [props.isActive, props.rowId, evalBoard]);

  return (
    <>
      <span
        style={{
          ...rowStyle,
          // border: props.isActive ? "2px solid black" : "1px solid black",
        }}
      >
        {evalHoleList}
      </span>
    </>
  );
};

const rowStyle = {
  display: "inline-block",
  border: "1px solid black",
  margin: "8.5px",
};

export default EvalRow;
