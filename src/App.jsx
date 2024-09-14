import { GameContextProvider } from "./context/GameContext";
import Peg from "./components/Peg";
// import Row from "./components/row";
import BoardRow from "./components/BoardRows";

function App() {
  return (
    <GameContextProvider>
      {/* Adding a peg inside a parent div: */}
      <div>
        <Peg color="blue" />
        <span>------</span>
        <Peg color="red" />
        <span>------</span>
        <Peg color="green" />
      </div>
      <p>-</p>
      {/* Adding a row inside a parent div: */}
      <div>
        <BoardRow />
      </div>
    </GameContextProvider>
  );
}

export default App;
