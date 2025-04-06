/* eslint-disable react/prop-types */

// Mastermind board of rows component.
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import EvalRow from "../Row/EvalRow";

const EvalBoard = () => {
  const { board } = useContext(GameContext);

  const rowList = board.map((row, index) => {
    return (
      <div key={index}>
        <EvalRow
          key={index}
          rowId={row.rowId}
          isActive={row.isActive}
          content={row.rowContent}
        />
      </div>
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

export default EvalBoard;
