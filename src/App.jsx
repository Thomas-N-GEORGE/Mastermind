import { GameContextProvider } from "./context/GameContext";
import Game from "./components/Game";

function App() {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
}

export default App;
