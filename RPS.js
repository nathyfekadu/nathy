let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_section = document.getElementById("rock");
const paper_section = document.getElementById("paper");
const scissor_section = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = " You choose " + userChoice + " and Computer choose " + computerChoice + " SO YOU WIN! ";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = " You choose " + userChoice + " and Computer choose " + computerChoice + " SO YOU LOST. ";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = " You choose " + userChoice + " and Computer choose " + computerChoice + " SO IT'S A DRAW. ";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 400);
}

console.log(getComputerChoice()); 

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":  
            draw(userChoice, computerChoice);  
            break;
     }
  }

function main() {
    rock_section.addEventListener('click', function() {
        game("rock");
    })
    
    paper_section.addEventListener('click', function() {
        game("paper");
        })
    
    scissor_section.addEventListener('click', function() {
        game("scissors");
            })
}

main();

