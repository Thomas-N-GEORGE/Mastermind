/* eslint-disable react/prop-types */

// Mastermind board of rows component.
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Row from "./Row";

const BoardRow = () => {
  const { activeRow } = useContext(GameContext);

  // const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rows = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <>
      <div
        style={{
          ...boardRowStyle,
        }}
      >
        {rows.map((row, i) => {
          return (
            <div key={9 - i}>
              <Row key={9 - i} id={row} isActive={row === activeRow.id ? true : false} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const boardRowStyle = {
  // display: "inline-block",
  // border: "1px solid black",
};

export default BoardRow;
