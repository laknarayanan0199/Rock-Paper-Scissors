const startGameBtn = document.getElementById("start-game-btn");
const startMsg = document.getElementById("startMsg");
const pInput = document.getElementById("pInput");
const cInput = document.getElementById("cInput");
const result = document.getElementById("result");

const Rock = "ROCK";
const Paper = "PAPER";
const Scissor = "SCISSOR";
const defaultValue = Rock;
const resultDraw = '"Match Draw!"';
const resultPWinner = '"Hurray! You Won"';
const resultCWinner = '"Alas You Lost"';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${Rock},${Paper} or ${Scissor}`).toUpperCase();
  if (selection !== Rock && selection !== Paper && selection !== Scissor) {
    alert(`Invalid choice! we chose default value ${defaultValue} for you`);
    return defaultValue;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.25) {
    return Rock;
  } else if (randomValue < 0.5) {
    return Paper;
  } else {
    return Scissor;
  }
};

const getWinner = (pchoice, cchoice) => {
  if (pchoice === cchoice) {
    return resultDraw;
  } else if (
    (pchoice === Rock && cchoice === Scissor) ||
    (pchoice === Paper && cchoice === Rock) ||
    (pchoice === Scissor && cchoice === Paper)
  ) {
    return resultPWinner;
  } else {
    return resultCWinner;
  }
};
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  //   console.log("Game is starting");
  startMsg.innerText = "Game is starting";
  const PlayerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(PlayerChoice, ComputerChoice);
  pInput.innerText = `Player Choice is ${PlayerChoice}`;
  cInput.innerText = `Computer Choice is ${ComputerChoice}`;
  result.innerText = `Match Result ${winner}`;
  //   console.log(`Player Choice is ${PlayerChoice}`);
  //   console.log(`Computer Choice is ${ComputerChoice}`);
  //   console.log(`Match Result ${winner}`);
  gameIsRunning = false;
});
