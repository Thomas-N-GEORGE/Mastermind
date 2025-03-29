/* eslint-disable react/prop-types */
// Game Context API.

import { useState, createContext } from "react";

export const GameContext = createContext();

const initialActiveRowId = 9;

// const intialPeg = {
//     position: null,
//     color: null,
//     isInActiveRow: false
// }

const holeIds = [0, 1, 2, 3, 4, 5];
const initialRow = Array.from(holeIds, (holeId) => (
    {
        holeId: holeId,
        holeContent: null
    }
))

const rowIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialBoard = Array.from(rowIds, (rowId) => (
    {
        rowId: rowId,
        isActive: rowId !== initialActiveRowId ? false:true,
        rowContent: initialRow
    }
));

export const GameContextProvider = (props) => {
  // State goes here.
  const [activePeg, setActivePeg] = useState(null);
  const [draggedPeg, setDraggedPeg] = useState(null);
  const [sourceHole, setSourceHole] = useState(null);
  const [activeRowId, setActiveRowId] = useState(initialActiveRowId);
  const [board, setBoard] = useState(initialBoard);

  return (
    <GameContext.Provider
      value={{
        activePeg, 
        setActivePeg,
        draggedPeg,
        setDraggedPeg,
        sourceHole,
        setSourceHole,
        activeRowId, 
        setActiveRowId,
        board, 
        setBoard
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
