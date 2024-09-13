/* eslint-disable react/prop-types */
// Game Context API.

import { useState, createContext } from "react";

export const GameContext = createContext();

let initialRow = [null, null, null, null, null, null];

export const GameContextProvider = (props) => {
  // State goes here.
  const [draggedPeg, setDraggedPeg] = useState(null);
  const [draggedPegColor, setDraggedPegColor] = useState(null);
  const [activeRow, setActiveRow] = useState(initialRow);
  
  return (
    <GameContext.Provider
      value={{
        draggedPeg,
        setDraggedPeg,
        draggedPegColor,
        setDraggedPegColor,
        activeRow,
        setActiveRow,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
