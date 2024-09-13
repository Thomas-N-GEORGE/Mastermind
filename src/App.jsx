import { GameContextProvider } from "./context/GameContext";
import Peg from "./components/Peg";
import Row from "./components/Row";

function App() {
  return (
    <GameContextProvider>
      {/* Adding a peg inside a parent div: */}
      <div>
        <Peg color="blue" />
        <span>------</span>
        <Peg color="red" />
      </div>
      <p>-</p>
      {/* Adding a row inside a parent div: */}
      <div>
        <Row />
      </div>
    </GameContextProvider>
  );
}

export default App;
