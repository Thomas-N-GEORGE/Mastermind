/* eslint-disable react/prop-types */

// Mastermind game solution row component.
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import Hole from "../Hole/Hole";
import generateSolution from "../../helpers/combinationGenerator";

const SolutionRow = (props) => {
  const { availableColors, solution, setSolution } = useContext(GameContext);

  useEffect(() => {
    setSolution(generateSolution(availableColors));
  }, [setSolution, availableColors]);

  const holeList =
    solution === null
      ? null
      : solution.map((color, index) => {
          return (
            <Hole
              key={index}
              holeId={index}
              holeContent={{ color: color }}
              isActive={false}
            />
          );
        });

  return (
    <>
      <span
        style={{
          ...rowStyle,
          // border: props.isActive ? "3px solid black" : "1px solid black",
        }}
      >
        {holeList}
      </span>
    </>
  );
};

const rowStyle = {
  display: "inline-block",
  border: "4px solid black",
};

export default SolutionRow;
