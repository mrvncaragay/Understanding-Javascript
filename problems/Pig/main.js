//
//Track global score for each player
/*
let score = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

let setWhoGoesFirst = (Math.floor(Math.random() * (2 - 1 + 1))) + 1;

let p1 = document.querySelector(".player-1-panel");
let p2 = document.querySelector(".player-2-panel");

updateTurn(setWhoGoesFirst);

document.querySelector(".btn-roll").addEventListener('click', function() {

    let rollMe = rollDice();
    document.querySelector(".dice").src = `dice-${rollMe}.png`;

    if( rollMe === 1 ) {
        score = 0;
        updateCurrentScore(score);
        setWhoGoesFirst === 1 ? setWhoGoesFirst++ : setWhoGoesFirst--;
        updateTurn(setWhoGoesFirst);

    } else {
        score += rollMe;
        updateCurrentScore(score);
    }
});

document.querySelector(".btn-hold").addEventListener('click',  function() {
    saveCurrentScore( score );
    score = 0;
    updateCurrentScore( score );
    setWhoGoesFirst === 1 ? setWhoGoesFirst++ : setWhoGoesFirst--;
    updateTurn( setWhoGoesFirst );
});

document.querySelector(".btn-new").addEventListener('click', function() {
    resetGame();
});
*/