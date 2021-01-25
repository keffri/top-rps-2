const playerScore = document.getElementById("pScore");
let pScore = 0;

const computerScore = document.getElementById("cScore");
let cScore = 0;

const gameText = document.getElementById("gameText");

function computerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  computerSelection.textContent = choices[randomNumber];
  return choices[randomNumber];
}

const playerSelection = document.getElementById("pSelection");
const computerSelection = document.getElementById("cSelection");

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click", () => {
  playerSelection.textContent = "Rock";
  matchWinner("Rock", computerChoice());
});

const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", () => {
  playerSelection.textContent = "Paper";
  matchWinner("Paper", computerChoice());
});

const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", () => {
  playerSelection.textContent = "Scissors";
  matchWinner("Scissors", computerChoice());
});

function matchWinner(playerPick, computerPick) {
  if (
    (playerPick === "Rock" && computerPick === "Paper") ||
    (playerPick === "Paper" && computerPick === "Scissors") ||
    (playerPick === "Scissors" && computerPick === "Rock")
  ) {
    computerScore.textContent = ++cScore;
    gameText.textContent = `Computer beats your ${playerPick} with their ${computerPick}.`;
  } else if (
    (computerPick === "Rock" && playerPick === "Paper") ||
    (computerPick === "Paper" && playerPick === "Scissors") ||
    (computerPick === "Scissors" && playerPick === "Rock")
  ) {
    playerScore.textContent = ++pScore;

    gameText.textContent = `Player beats computer's ${computerPick} with their ${playerPick}.`;
  } else if (playerPick === computerPick) {
    gameText.textContent = `Both the player and the computer selected ${playerPick}.`;
  }
}
