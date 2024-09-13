/* eslint-disable react/prop-types */
// Game Context API.

import { useState } from "react";
import { GameContext } from "./GameContext";

export const GameContextProvider = (props) => {
  // State goes here.
  const [draggedPeg, setDraggedPeg] = useState(null);
  const [draggedPegColor, setDraggedPegColor] = useState(null);
  return (
    <GameContext.Provider value={{ draggedPeg, setDraggedPeg, draggedPegColor, setDraggedPegColor }}>
      {props.children}
    </GameContext.Provider>
  );
};
