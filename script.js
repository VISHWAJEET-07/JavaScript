let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissor
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game is draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You won!");
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "darkgreen"; 
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose!");
        msg.innerText = `You lose! Computer's ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"; 
    }
}

const playGame = (userChoice) => {
    // console.log("User choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
 }

 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
      console.log("Choice was clicked", userChoice);
      playGame(userChoice);

    })
})

