const buttons = document.getElementById("buttons");

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
  checkWinner(pScore, cScore);
});

const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", () => {
  playerSelection.textContent = "Paper";
  matchWinner("Paper", computerChoice());
  checkWinner(pScore, cScore);
});

const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", () => {
  playerSelection.textContent = "Scissors";
  matchWinner("Scissors", computerChoice());
  checkWinner(pScore, cScore);
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

function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    gameText.textContent = `Player wins!`;
    buttons.classList.add("hidden");
  } else if (computerScore === 5) {
    gameText.textContent = `Computer wins!`;
    buttons.classList.add("hidden");
  }
}

function resetGame() {
  pScore = 0;
  playerScore.textContent = pScore;
  playerSelection.textContent = "";
  cScore = 0;
  computerScore.textContent = cScore;
  computerSelection.textContent = "";
  gameText.textContent = `Welcome to DOM RPS`;
  buttons.classList.remove("hidden");
}

resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);
