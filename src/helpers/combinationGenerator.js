// Generate a combination for the game.

const pickColor = (availableColors) => {
  return availableColors[Math.floor(Math.random() * availableColors.length)];
};

const generateSolution = (availableColors) => {
  let solution = Array.from({length: 6}, (value, key) => pickColor(availableColors));
  console.log("solution:", solution);
  return solution;
}

export default generateSolution;
