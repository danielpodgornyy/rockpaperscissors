const start = document.querySelector('#start');

start.addEventListener('click', () =>
{
    removeTitle();
    generateGame();
    gameStart();
});

function removeTitle()
{
    //create node references to the body and the start container
    let body = document.querySelector('body');
    let start_container = document.querySelector('.start_container');

    //remove start screen from the dom
    body.removeChild(start_container);
}

function generateGame()
{
    //create nodes for game gui
    let body = document.querySelector('body')
    let gameContainer = document.createElement('div');
    let chooseRow = document.createElement('div');
    let profiles = document.createElement('div');
    let humanProfile = document.createElement('div');
    let humanContainer = document.createElement('div');
    let humanIMG = document.createElement('img');
    let humanScore = document.createElement('p');
    let computerProfile = document.createElement('div');
    let computerScore = document.createElement('p');
    let computerContainer = document.createElement('div');
    let computerIMG = document.createElement('img');
    let choose = document.createElement('h1');
    let selection = document.createElement('div');
    let rock = document.createElement('div');
    let rockIMG = document.createElement('img');
    let paper = document.createElement('div');
    let paperIMG = document.createElement('img');
    let scissors = document.createElement('div');
    let scissorsIMG = document.createElement('img');
    let output = document.createElement('h1');

    //add each nodes attribute
    gameContainer.classList.add('game_container');
    chooseRow.classList.add('choose_row');
    profiles.classList.add('profiles');
    humanProfile.classList.add('human_prof');
    humanContainer.classList.add('hum_container');
    humanIMG.src = 'imgs/humanIcon.png';
    humanScore.textContent = '0';
    humanScore.id = 'hum_score';
    computerProfile.classList.add('comp_prof');
    computerScore.textContent = '0';
    computerScore.id = 'comp_score';
    computerContainer.classList.add('comp_container');
    computerIMG.src = 'imgs/Computer.png';
    choose.textContent = "CHOOSE:";
    selection.classList.add('selection_row');
    rock.id = 'Rock';
    rockIMG.src = "imgs/rock.jpg";
    paper.id = ('Paper');
    paperIMG.src = 'imgs/paper.jpg';
    scissors.id = 'Scissors';
    scissorsIMG.src = 'imgs/scissors.jpg';
    output.id = 'output'

    //add nodes to dom
    body.appendChild(gameContainer);
    gameContainer.appendChild(chooseRow);
    chooseRow.appendChild(profiles);
    profiles.appendChild(humanProfile);
    humanProfile.appendChild(humanContainer);
    humanContainer.appendChild(humanIMG);
    humanProfile.appendChild(humanScore);
    profiles.appendChild(computerProfile);
    computerProfile.appendChild(computerScore);
    computerProfile.appendChild(computerContainer);
    computerContainer.appendChild(computerIMG);
    chooseRow.appendChild(choose);
    gameContainer.appendChild(selection);
    selection.appendChild(rock);
    rock.appendChild(rockIMG);
    selection.appendChild(paper);
    paper.appendChild(paperIMG);
    selection.appendChild(scissors);
    scissors.appendChild(scissorsIMG);
    gameContainer.appendChild(output);
}

function gameStart()
{
    let rock = document.querySelector('#Rock');
    let paper = document.querySelector('#Paper');
    let scissors = document.querySelector('#Scissors');

    //wait until an option is selected
    rock.addEventListener('click', changeDOM);
    paper.addEventListener('click', changeDOM);
    scissors.addEventListener('click', changeDOM);

}

function changeDOM(e)
{
    let playerScore = document.querySelector('#hum_score');
    let compScore = document.querySelector('#comp_score');
    let output = document.querySelector('#output');
    let card = e.currentTarget;
    let playerChoice = e.currentTarget.id;

    let result = startRound(playerChoice,getComputerChoice());
    
    //When the score is to be updated, it is converted back to a number, incremented, and finally put back into the score along with a message
    if (result == "You Win!")
    {
        let playerScoreNum = +playerScore.textContent;
        playerScoreNum++;
        playerScore.textContent = playerScoreNum;
        output.textContent = `${playerChoice} was a genius choice!`;
        
    }
    else if (result == "You Lose!")
    {
        let compScoreNum = +compScore.textContent;
        compScoreNum++;
        compScore.textContent = compScoreNum;
        output.textContent = `Maybe ${playerChoice} wasn't such a good choice.`;
    }
    else
    {
        output.textContent = "It appears, it is a draw";
    }
    
    //When a card is clicked on, it will be raised slightly and will hold for about 1500 ms
    card.style.cssText = 'margin-top: 0px; transition: 1s;';
    setTimeout(() => 
    {
        card.style.cssText = 'margin-top: ; transition: ; transition-timing-function:';
    }, 1500)

    //Once one of the two players reaches 5 points, the game ends
    if (playerScore.textContent == 5 || compScore.textContent == 5)
    {
        removeGame(playerScore.textContent);
        let restart = document.querySelector('#play_again');
        restart.addEventListener('click',restartGame);

    }
}

//takes in both the player and the computers answer and outputs the result
function startRound(playerSelection, computerSelection)
{
    switch(true)
    {
        case playerSelection == "Rock" && computerSelection == "Rock":
            return "We have a draw!";
            break;
        case playerSelection == "Rock" && computerSelection == "Paper":
            return "You Lose!";
            break;
        case playerSelection == "Rock" && computerSelection == "Scissors":
            return "You Win!";
            break;
        case playerSelection == "Paper" && computerSelection == "Rock":
            return "You Win!";
            break;
        case playerSelection == "Paper" && computerSelection == "Paper":
            return "We have a draw!";
            break;
        case playerSelection == "Paper" && computerSelection == "Scissors":
            return "You Lose!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Rock":
            return "You Lose!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Paper":
            return "You Win!";
            break;
        case playerSelection == "Scissors" && computerSelection == "Scissors":
            return "We have a draw!";
            break;
    }
}

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

function removeGame(playerScore)
{
    //removes the game container
    let body = document.querySelector('body');
    let gameContainer = document.querySelector('.game_container')
    body.removeChild(gameContainer);
    
    //creates elements for the ending screen
    let endContainer = document.createElement('div');
    let message = document.createElement('h1');
    let img = document.createElement('img');
    let playAgain = document.createElement('button');

    //adds each elements attributes
    endContainer.classList.add('end_container')
    message.id = 'message';
    img.id = 'end_img';
    playAgain.id = 'play_again';

    //adds elements to dom
    body.appendChild(endContainer);
    endContainer.appendChild(message);
    endContainer.appendChild(img);
    endContainer.appendChild(playAgain);

    //if the player wins, the victory message is output, else the player was defeated
    if (playerScore == 5)
    {
        message.textContent = "Victory!"
        img.src = 'imgs/crown.jpg'

    }
    else
    {
        message.textContent = "Defeat!";
        img.src = 'imgs/RIP.png';
    }

    playAgain.textContent = "Restart"

    return;
}

function restartGame()
{
    let body = document.querySelector('body');
    let end_Container = document.querySelector('.end_container');
    body.removeChild(end_Container);

    generateGame();
    gameStart();
}