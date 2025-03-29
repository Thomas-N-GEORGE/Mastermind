// A Mastermind peg component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

const Peg = (props) => {
  const [draggable, setDraggable] = useState(true);
//   const [isInActiveRow, setIsInActiveRow] = useState(false);
  const { setDraggedPeg } = useContext(GameContext);
  const thisPeg = {
    color: props.color,
    isInActiveRow: props.isInActiveRow,
    id: props.id,
  };

  return (
    <span
      onClick={() => {
        setDraggable(!draggable);
      }}
      draggable={draggable}
      onDragStart={() => {
        setDraggedPeg(thisPeg);
      }}
      onDragEnd={() => {
        // If isInActiveRow dragged out of active row, 
				// suppress peg and leave the hole blank. How do we do this ?
				// if (props.isInActiveRow && props.id == null) {}
        }
      }
      style={{
        ...pegStyle,
        backgroundColor: props.color,
        cursor: draggable ? "move" : "pointer",
      }}
    ></span>
  );
};

const pegStyle = {
  position: "absolute",
  height: "25px",
  width: "25px",
  backgroundColor: "black",
  borderRadius: "50%",
  display: "inline-block",
};

export default Peg;
