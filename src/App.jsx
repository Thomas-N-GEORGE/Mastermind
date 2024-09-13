import { GameContextProvider } from "./context/GameContextProvider";
import Peg from "./components/Peg";
import Hole from "./components/Hole";

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
      {/* Adding a hole inside a parent div: */}
      <div>
        <Hole />
      </div>
    </GameContextProvider>
  );
}

export default App;
