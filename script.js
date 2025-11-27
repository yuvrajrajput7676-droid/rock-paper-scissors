let win = 0;
let loss = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice");
const userText = document.getElementById("userChoice");
const compText = document.getElementById("computerChoice");
const resultText = document.getElementById("result");

const winCount = document.getElementById("winCount");
const lossCount = document.getElementById("lossCount");
const drawCount = document.getElementById("drawCount");

choices.forEach(button => {
    button.addEventListener("click", () => {
        let userChoice = button.dataset.choice;
        let compChoice = getComputerChoice();
        let result = getResult(userChoice, compChoice);

        userText.textContent = "You: " + userChoice;
        compText.textContent = "Computer: " + compChoice;
        resultText.textContent = "Result: " + result;

        // Score Update
        if (result.includes("Win")) {
            win++;
            winCount.textContent = win;
        } else if (result.includes("Lose")) {
            loss++;
            lossCount.textContent = loss;
        } else {
            draw++;
            drawCount.textContent = draw;
        }
    });
});

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function getResult(user, comp) {
    if (user === comp) return "Draw 😐";

    if (
        (user === "rock" && comp === "scissors") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissors" && comp === "paper")
    ) {
        return "You Win 🎉";
    }

    return "You Lose 😢";
}
