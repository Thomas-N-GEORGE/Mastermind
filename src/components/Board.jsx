/* eslint-disable react/prop-types */

// Mastermind board of rows component.
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Row from "./Row";

const Board = () => {
  const { board } = useContext(GameContext);

  const rowList = board.map((row, index) => {
    return (
      <Row
        key={index}
        rowId={row.rowId}
        isActive={row.isActive}
        content={row.rowContent}
      />
    );
  });

  return (
    <>
      <div
        style={{
          ...boardRowStyle,
        }}
      >
        {rowList}
      </div>
    </>
  );
};

const boardRowStyle = {
  // display: "inline-block",
  // border: "1px solid black",
};

export default Board;
