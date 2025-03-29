/* eslint-disable react/prop-types */
// Game Context API.

import { useState, createContext } from "react";

export const GameContext = createContext();

// const initialRowId = 0;
// const initialRow = [null, null, null, null, null, null];

const intialPeg = {
    color: null
}

const holeIds = [0, 1, 2, 3, 4, 5];
const initialRow = Array.from(holeIds, (id) => (
    {
        holeId: id,
        holeContent: intialPeg
    }
))

const rowIds = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const initialBoard = Array.from(rowIds, (rowId) => (
    {
        rowId: rowId,
        isActive: rowId !== 0 ? false:true,
        rowContent: initialRow
    }
));

export const GameContextProvider = (props) => {
  // State goes here.
  // TODO : Represent part of or the whole game here,
  //    so that we can simply access state everywhere.
  const [activePeg, setActivePeg] = useState(null);
  const [draggedPeg, setDraggedPeg] = useState(null);
  const [sourceHole, setSourceHole] = useState(null);
//   const [activeRow, setActiveRow] = useState({
//     id: initialRowId,
//     content: initialRow,
//   });
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
        // activeRow,
        // setActiveRow,
        board, 
        setBoard
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
