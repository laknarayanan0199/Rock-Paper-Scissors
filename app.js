const startGameBtn = document.getElementById("start-game-btn");

const Rock = "ROCK";
const Paper = "PAPER";
const Scissor = "SCISSOR";
const defaultValue = Rock;
const resultDraw = '"Match Draw!"';
const resultPWinner = '"Hurray! You Won"';
const resultCWinner = '"Alas You Lost"';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `Enter the choice ${Rock}, ${Paper} or ${Scissor}?`,
    ""
  ).toUpperCase();
  if (selection !== Rock && selection !== Paper && selection !== Scissor) {
    alert(`Invalid choice! We chose ${defaultValue} for you!`);
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
  console.log("Game is starting");
  const PlayerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(PlayerChoice, ComputerChoice);
  console.log(`Player Choice is ${PlayerChoice}`);
  console.log(`Computer Choice is ${ComputerChoice}`);
  console.log(`Match Result ${winner}`);
  gameIsRunning = false;
});
