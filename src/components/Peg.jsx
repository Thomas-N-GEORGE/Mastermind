// Try to design a Mastermind peg component.
import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

const Peg = (props) => {
  const [draggable, setDraggable] = useState(true);
  const { setDraggedPegColor } = useContext(GameContext);

  return (
    <span
      onClick={() => {
        setDraggable(!draggable);
        // setMeInContext();
        // setDraggedPeg(<Peg />)
      }}
      draggable={draggable}
      onDragStart={() => {setDraggedPegColor(props.color)}}
      style={{ ...pegStyle, backgroundColor: props.color, cursor: draggable ? "move" : "pointer" }}
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
