// Mastermind hole component.
// import { useState, useContext } from "react";
// import { GameContext } from "../../context/GameContext";
import EvalPeg from "../Peg/EvalPeg";
// import { updateBoardHelper, setPegHelper, swapPegsHelper } from "./helpers";

const EvalHole = (props) => {
  // const [isDraggedOver, setIsDraggedOver] = useState(false);
  // const {} = useContext(GameContext);
  const renderedEvalPeg =
    props.holeContent !== null ? (
      <EvalPeg
        position={props.holeId}
        color={props.holeContent.color}
        // isInActiveRow={props.isActive}
      />
    ) : null;

  return (
    <>
      <span
        style={{
          ...holeStyle,
          border: props.holeContent !== null ? "solid black 3px" : "dashed black 2px",
        }}
      >
        {renderedEvalPeg}
      </span>
    </>
  );
};

const holeStyle = {
  display: "inline-block",
  height: "10px",
  width: "10px",
  borderRadius: "50%",
  margin: "10px",
};

export default EvalHole;
