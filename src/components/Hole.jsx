// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import Peg from "./Peg";

const Hole = (props) => {
  const [myPeg, setMyPeg] = useState(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const { setDraggedPeg, draggedPegColor, activeRow, setActiveRow } =
    useContext(GameContext);

  function handleUpdateRow(newColor, index) {
    const updatedRow = activeRow.map((color, i) => {
      if (i === index) {
        // Update color
        return newColor;
      } else {
        // The rest haven't changed
        return color;
      }
    });
    setActiveRow(updatedRow);
  }

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
          console.log(
            "draggedPegColor:",
            draggedPegColor,
            "on hole n° ",
            props.id
          );
          handleUpdateRow(draggedPegColor, props.id - 1);
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
  display: "inline-block",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  margin: "10px",
};

export default Hole;
