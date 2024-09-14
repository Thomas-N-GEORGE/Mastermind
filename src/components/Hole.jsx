// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import Peg from "./Peg";

const Hole = (props) => {
  const [myPeg, setMyPeg] = useState(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const { setDraggedPeg, draggedPegColor, activeRow, setActiveRow } =
    useContext(GameContext);

  function handleUpdateRow(newColor, id) {
    const updatedRow = activeRow.content.map((color, i) => {
      if (i === id) {
        // Update color.
        return newColor;
      } else {
        // The rest haven't changed.
        return color;
      }
    });
    setActiveRow({...activeRow, content:updatedRow});
  }

  return (
    <>
      <span
        style={{
          ...holeStyle,
          border: isDraggedOver ? "solid red 3px" : "dashed black 3px",
        }}
        // Drag and drop API.
        onDragEnter={() => setIsDraggedOver(props.isActive)}
        onDragLeave={() => setIsDraggedOver(false)}
        onDragOver={(e) => {
          if (props.isActive) {
            e.preventDefault();
          }
        }}
        onDrop={() => {
          if (props.isActive) {
            setMyPeg(<Peg color={draggedPegColor} />);
            console.log(
              "draggedPegColor:",
              draggedPegColor,
              "on hole n° ",
              props.id
            );
            handleUpdateRow(draggedPegColor, props.id);
            setDraggedPeg(null);
            setIsDraggedOver(false);
          }
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
