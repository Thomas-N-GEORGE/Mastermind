/* eslint-disable react/prop-types */

// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import Peg from "./Peg";

const Hole = () => {
  const [myPeg, setMyPeg] = useState(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const {setDraggedPeg, draggedPegColor} = useContext(GameContext);

  return (
    <>
      <span
        style={{
          ...holeStyle,
          border: isDraggedOver ? "dashed red 3px" : "dashed black 3px",
        }}
        onDragEnter={() => setIsDraggedOver(true)}
        onDragLeave={() => setIsDraggedOver(false)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={() => {
          setMyPeg(<Peg color={draggedPegColor} />);
          console.log("draggedPegColor:", draggedPegColor);
          setDraggedPeg(null);
          setIsDraggedOver(false);
        }}
      >
        {myPeg}
      </span>
    </>
  );
};

const holeStyle = {
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  display: "inline-block",
};

export default Hole;
