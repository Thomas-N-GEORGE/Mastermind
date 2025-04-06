// Mastermind hole component.
import { useState, useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Peg from "../Peg/Peg";
import { updateBoardHelper, setPegHelper, swapPegsHelper } from "./helpers";

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

  function handleSetPeg(pegPosition, pegColor, pegIsInActiveRow) {
    const updatedRowContent = setPegHelper(
      board,
      activeRowId,
      pegPosition,
      pegColor,
      pegIsInActiveRow
    );
    const targetRow = board[activeRowId];
    const updatedBoard = updateBoardHelper(board, targetRow, updatedRowContent);
    setBoard(updatedBoard);
  }

  function handleSwapPegs(
    sourcePegPosition,
    sourcePegColor,
    sourcePegIsInActiveRow,
    currentPegPosition,
    currentPegColor,
    currentPegIsInActiveRow
  ) {
    const updatedRowContent = swapPegsHelper(
      board,
      activeRowId,
      sourcePegPosition,
      sourcePegColor,
      sourcePegIsInActiveRow,
      currentPegPosition,
      currentPegColor,
      currentPegIsInActiveRow
    );
    const targetRow = board[activeRowId];
    const updatedBoard = updateBoardHelper(board, targetRow, updatedRowContent);
    setBoard(updatedBoard);
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
