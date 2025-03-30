// A Mastermind peg component.
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Peg = (props) => {
  const { activeRowId, board, setBoard, draggedPeg, setDraggedPeg } =
    useContext(GameContext);
  const thisPeg = {
    position: props.position,
    color: props.color,
    isInActiveRow: props.isInActiveRow,
  };

  function handleDeletePeg(peg) {
    // Make sure peg.isInActiveRow otherwise we wreck the game!
    if (peg.isInActiveRow === true) {
      // Set to null board.activerow.rowContent.holeContent
      const updatedBoard = board;
      updatedBoard[activeRowId].rowContent[peg.position].holeContent = null;
      setBoard(updatedBoard);
    }
  }

  return (
    <span
      draggable={true}
      onDragStart={() => {
        setDraggedPeg(thisPeg);
      }}
      onDragEnd={() => {
        // If peg is dragged out of active row, we delete it.
        if (draggedPeg !== null && draggedPeg.isInActiveRow === true) {
          // Delete peg whitch leaves the hole blank.
          handleDeletePeg(draggedPeg);
          // Cleanup.
          setDraggedPeg(null);
        }
      }}
      style={{
        ...pegStyle,
        backgroundColor: props.color,
        cursor: "move",
      }}
    ></span>
  );
};

const pegStyle = {
  position: "absolute",
  height: "25px",
  width: "25px",
  backgroundColor: "black",
  borderRadius: "50%",
  display: "inline-block",
};

export default Peg;
