// Mastermaind whole game component.
import PegStack from "./Peg/PegStack";
import Board from "./Board/Board";
import EvalBoard from "./Board/EvalBoard";
import SolutionRow from "./Row/SolutionRow";

const Game = (props) => {
  return (
    <div>
      <SolutionRow />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <EvalBoard />
        <Board />
      </div>
      <PegStack />
    </div>
  );
};

export default Game;
