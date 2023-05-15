function getComputerChoice()
{
    let randomNum = Math.random();

    if (randomNum <= .3)
    {
        return "Rock";
    }
    else if (randomNum <= .6)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function round(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    switch(true)
    {
        case playerSelection == "Rock" && computerSelection == "Rock":
            return "We have a draw!";
            break;
        case playerSelection == "Rock" && computerSelection == "Paper":
            return "You lose!";
            break;
        case playerSelection == "Rock" && computerSelection == "Scissors":
            return "You Win!";
            break;
        case playerSelection == "Paper" && computerSelection == "Rock":
            return "You win!";
            break;
        case playerSelection == "Paper" && computerSelection == "Paper":
            return "We have a draw!";
            break;
        case playerSelection == "Paper" && computerSelection == "Scissors":
            return "You lose!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Rock":
            return "You lose!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Paper":
            return "You win!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Scissors":
            return "We have a draw!";
            break;
    }
}

function game()
{
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    let playerChoice;

    for (i = 0; i < 5; i++)
    {
        playerChoice = prompt("Choose between rock, paper, & scissors");
        console.log(round(playerChoice, getComputerChoice()));
        if (round == "You win!")
        {
            playerWinCounter++;
        }
        else if (round == "You lose!")
        {
            computerWinCounter++;
        }
    }

    if (playerWinCounter > computerWinCounter)
    {
        console.log("You win the game! GG");
    }
    else
    {
        console.log("You lost the game! GG")
    }
}

game();
