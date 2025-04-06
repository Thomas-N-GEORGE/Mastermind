/* eslint-disable react/prop-types */
// Game Context API.

import { useState, createContext } from "react";

export const GameContext = createContext();

const holeIds = [0, 1, 2, 3, 4, 5];
const initialRow = Array.from(holeIds, (holeId) => (
  {
    holeId: holeId,
    holeContent: null
  }
))

const initialActiveRowId = 9;
const rowIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialBoard = Array.from(rowIds, (rowId) => (
    {
        rowId: rowId,
        isActive: rowId !== initialActiveRowId ? false:true,
        rowContent: initialRow
    }
));
const initialEvalBoard = Array.from(rowIds, (rowId) => (
  {
      rowId: rowId,
      // isActive: rowId !== initialActiveRowId ? false:true,
      rowContent: initialRow
  }
));

const palette = [
  "blue",
  "red",
  "green",
  "orange",
  "black",
  "brown",
  "lightGreen",
  "lightBlue"
]

export const GameContextProvider = (props) => {
  // State goes here.
  const [activePeg, setActivePeg] = useState(null);
  const [draggedPeg, setDraggedPeg] = useState(null);
  const [sourceHole, setSourceHole] = useState(null);
  const [activeRowId, setActiveRowId] = useState(initialActiveRowId);
  const [board, setBoard] = useState(initialBoard);
  const [evalBoard, setEvalBoard] = useState(initialEvalBoard);
  const [availableColors, setAvailableColors] = useState(palette);
  const [solution, setSolution] = useState(null);

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
        setBoard,
        evalBoard, 
        setEvalBoard,
        availableColors,
        solution, 
        setSolution
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
