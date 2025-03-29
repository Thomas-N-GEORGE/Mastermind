// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import Peg from "./Peg";

const Hole = (props) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const { draggedPeg, setDraggedPeg, activeRowId, board, setBoard } =
    useContext(GameContext);
  const renderedPeg =
    props.holeContent !== null ? (
      <Peg
        position={props.holeId}
        color={props.holeContent.color}
        isInActiveRow={props.isActive}
      />
    ) : null;

  function handleUpdateBoard(targetRow, updatedRowContent) {
    // Board update.
    const updatedBoard = board.map((row, index) => {
      if (index === activeRowId) {
        // Update row.
        return { ...targetRow, rowContent: updatedRowContent };
      }
      // The rest haven't changed.
      return row;
    });
    setBoard(updatedBoard);
  }

  function handleSetPeg(pegPosition, pegColor, pegIsInActiveRow) {
    const newPeg = {
      position: pegPosition,
      color: pegColor,
      isInActiveRow: pegIsInActiveRow,
    };

    // Row update.
    const targetRow = board[activeRowId];
    const updatedRowContent = targetRow.rowContent.map((hole, index) => {
      if (index === pegPosition) {
        // Update peg.
        return { ...hole, holeContent: newPeg };
      } else {
        // The rest haven't changed.
        return hole;
      }
    });

    handleUpdateBoard(targetRow, updatedRowContent);
  }

  function handleSwapPegs(
    sourcePegPosition,
    sourcePegColor,
    sourcePegIsInActiveRow,
    currentPegPosition,
    currentPegColor,
    currentPegIsInActiveRow
  ) {
    const sourcePeg = {
      position: sourcePegPosition,
      color: currentPegColor,
      isInActiveRow: currentPegIsInActiveRow,
    };
    const targetPeg = {
      position: currentPegPosition,
      color: sourcePegColor,
      isInActiveRow: sourcePegIsInActiveRow,
    };

    // Row update.
    const targetRow = board[activeRowId];
    const updatedRowContent = targetRow.rowContent.map((hole, index) => {
      if (index === sourcePegPosition) {
        // Update source peg.
        return { ...hole, holeContent: sourcePeg };
      }
      if (index === currentPegPosition) {
        // Update target peg.
        return { ...hole, holeContent: targetPeg };
      }
      // The rest haven't changed.
      return hole;
    });

    handleUpdateBoard(targetRow, updatedRowContent);
  }

  function handleDroppedPeg(
    sourcePegPosition,
    sourcePegColor,
    sourcePegIsInActiveRow,
    currentPosition
  ) {
    if (props.holeContent == null || !sourcePegIsInActiveRow) {
      // Set pegs.
      handleSetPeg(currentPosition, sourcePegColor, true);
    } else {
      // Swap pegs.
      handleSwapPegs(
        sourcePegPosition,
        sourcePegColor,
        sourcePegIsInActiveRow,
        currentPosition,
        props.holeContent.color,
        props.holeContent.isInActiveRow
      );
    }
    setDraggedPeg(null);
    setIsDraggedOver(false);
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
            draggedPeg.position,
            draggedPeg.color,
            draggedPeg.isInActiveRow,
            props.holeId
          );
        }}
      >
        {renderedPeg}
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
