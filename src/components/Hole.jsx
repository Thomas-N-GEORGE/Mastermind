// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import Peg from "./Peg";

const Hole = (props) => {
  const [childPeg, setChildPeg] = useState(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const { draggedPeg, setDraggedPeg, activeRow, setActiveRow } =
    useContext(GameContext);

  function handleUpdateRow(pegColor, pegIsInActiveRow, id) {
    const newPeg = {
      color: pegColor,
      isInActiveRow: pegIsInActiveRow,
      id: id,
    };
    console.log("HandleUpdateRow, peg = ", newPeg);
    const updatedRow = activeRow.content.map((peg, i) => {
      if (i === id) {
        // Update peg.
        console.log("newPeg id:", i, "newPeg:", newPeg);
        return newPeg;
      } else {
        // The rest haven't changed.
        console.log("unchangedPeg id:", i, "peg:", peg);
        return peg;
      }
    });
    console.log("updatedRow = ", updatedRow);
    setActiveRow({ ...activeRow, content: updatedRow });
  }

  function handleDroppedPeg(color, isInActiveRow, sourceId, id) {
    if (childPeg == null || !isInActiveRow) {
      // Setting pegs.
      console.log(
        "Setting peg",
        color,
        isInActiveRow,
        sourceId,
        id
      );
      setHoleChildPeg(color, true, id);
			handleUpdateRow(color, true, id);
    } else {
			// Swapping pegs.
      // Source hole receives actual childPeg color.
      console.log(
				"Swapping pegs",
        activeRow.content[id].color,
        true,
        activeRow.content[sourceId].id
      );
      handleUpdateRow(
				activeRow.content[id].color,
        true,
        activeRow.content[sourceId].id
      );
      // And this hole receives incoming color.
      // handleUpdateRow(color, true, id);
			setHoleChildPeg(color, true, id);
    }
    setDraggedPeg(null);
    setIsDraggedOver(false);
  }

  function setHoleChildPeg(color, isInActiveRow, id) {
    setChildPeg(
      <Peg color={color} isInActiveRow={isInActiveRow} id={id} />
    );
  }

  function suppressChildPeg() {
    setChildPeg(null);
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
            setIsDraggedOver(true);
          }
        }}
        onDrop={() => {
          handleDroppedPeg(
            draggedPeg.color,
            draggedPeg.isInActiveRow,
            draggedPeg.id,
            props.id
          );
        }}
      >
        {childPeg}
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
