'use strict';
const startGame = document.getElementById('startgame');
const gameControl = document.getElementById('gamecontrol');
const game = document.getElementById('game');
const score = document.getElementById('score');
const actionArea = document.getElementById('actions');   
const gameData = {
    dice: ['1die.png', '2die.png', '3die.png', 
        '4die.png', '5die.png', '6die.png'],
    players: ['player 1', 'player 2'],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29
};
startGame.addEventListener("click", function(){
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = '<h2>The game has started</h2>';
    gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById('quit').addEventListener("click",function(){
        location.reload();
    });
    console.log("Set up the turn!");
    setUpTurn();
});
function setUpTurn(){
    game.innerHTML = `<p>Order breakfast for the ${gameData.players[gameData.index]}</p>`;
    console.log(game);
    actionArea.innerHTML='<button id = "roll"> Order food</button>';
    document.getElementById('roll').addEventListener('click', function(){
        //console.log("order food!");
        throwDice();
    });
}
function throwDice(){
    actionArea.innerHTML='';
    gameData.roll1 = Math.floor(Math.random()*6)+1;
    gameData.roll2 =Math.floor(Math.random()*6)+1;
    game.innerHTML = `<p>Order breakfast for the ${gameData.players[gameData.index]}</p>`;
    game.innerHTML+= `<img src="${gameData.dice[gameData.roll1-1]}">
                        <img src="${gameData.dice[gameData.roll2-1]}">`;
    
    gameData.rollSum=gameData.roll1 + gameData.roll2;
    console.log(gameData);
    if(gameData.rollSum === 2){
        console.log("2 fried eggs were ordered");
        game.innerHTML+= '<p>Oh no! 2 fried eggs!</p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);

        setTimeout(setUpTurn, 2000);
        showCurrentScore();
    }
    else if (gameData.roll1 ===1 || gameData.roll2 === 1){
        console.log("one of the plates was an egg");
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        game.innerHTML += `<p> Sorry, one of your plates was an egg, switching to ${gameData.players[gameData.index]}</p>`;
        setTimeout(setUpTurn,2000);
    }
    else{
        console.log("the game proceeds");
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id= "rollagain">Order again</button> or <button id="pass">Pass</button>';
        document.getElementById('rollagain').addEventListener('click', function(){
            setUpTurn();
        });
        document.getElementById('rollagain').addEventListener('click',function(){
            setUpTurn();
        });
        document.getElementById('pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index=1);
            setUpTurn();
        });
        checkWinningCondition();
    }
}
function checkWinningCondition(){
    if(gameData.score[gameData.index]>gameData.gameEnd){
        score.innerHTML = `<h2>${gameData.players[gameData.index]}wins with ${gameData.score[gameData.index]} pieces of bacon!</h2`;

        actionArea.innerHTML = '';
        document.getElementById('quit').innerHTML= "Start a new game?";
    }
    else{
        score.innerHTML=`<p> the score is currently <strong>${gameData.players[0]}
            ${gameData.score[0]}</strong> and  <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong> </p>`;
    }
}
function showCurrentScore(){
    score.innerHTML=`<p> the score is currently <strong>${gameData.players[0]}
            ${gameData.score[0]}</strong> and  <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong> </p>`;

}

