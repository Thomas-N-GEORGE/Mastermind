// Mastermaind whole game component.
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Peg from "./Peg";

const PegStack = (props) => {
  const { availableColors } = useContext(GameContext);
  const pegStack = availableColors.map((color, index) => {
    return (
        <div key={index} style={{ margin: "15px"}}>
          <Peg color={color} isInActiveRow={false} id={null} />
        </div>
    );
  });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {pegStack}
      </div>
    </div>
  );
};

export default PegStack;
