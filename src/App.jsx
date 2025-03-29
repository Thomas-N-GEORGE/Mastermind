import { GameContextProvider } from "./context/GameContext";
import Peg from "./components/Peg";
import Board from "./components/Board";

function App() {
  return (
    <GameContextProvider>
      {/* Adding pegs inside a parent div: */}
      <div>
        <Peg color="blue" isInActiveRow={false} id={null} />
        <span>------</span>
        <Peg color="red" isInActiveRow={false} id={null} />
        <span>------</span>
        <Peg color="green" isInActiveRow={false} id={null} />
      </div>
      <p>-</p>
      {/* Adding the board inside a parent div: */}
      <div>
        <Board />
      </div>
    </GameContextProvider>
  );
}

export default App;
