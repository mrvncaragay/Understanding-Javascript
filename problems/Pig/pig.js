/*
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins. -Wikipedia

 */

class PigGame {

    constructor( mscore = 100, cscore = 0, ...players ) {

        //check also if players are Player Class
        if( players.length < 2 ) {
            throw 'Not Enough Player';
        }

        this.mscore = mscore; //max score to win
        this.cscore = cscore; //current score
        this.currentPlayer = this.rollDice(players.length, 1) //1-2; //Player who currently playing
        this.players = players;
    }

    play() {
        let dice = this.rollDice(6,1);

        this.updateDiceImage(dice);

        if(dice === 1) {

            this.cscore = 0;
            this.updateStats();
            this.changePlayer();

        } else {

            this.cscore += dice;
            this.updateStats(this.currentPlayer)
        }
    }

    updateStats() {
        let cp = this.currentPlayer;
        let cs = this.cscore;
        document.querySelector(`#current-${cp--}`).textContent = cs;
    }

    updateCurrentScore() {

        document.querySelector(`#current-${1}`).textContent = 0;
    }

    init() {

        this.resetWindowScore();
        this.setPlayerNames();
        this.coinToss(); //who gets to go first
    }

    reset() {
        this.init();
    }

    coinToss() {

        if(this.currentPlayer === 1) {

            document.querySelector(".player-1-panel").className += ' active';
            document.querySelector(".player-2-panel").classList.remove('active');
        } else {

            document.querySelector(".player-2-panel").className += ' active';
            document.querySelector(".player-1-panel").classList.remove('active');
        }
    }

    updateDiceImage(num) {
        document.querySelector(".dice").src = `dice-${num}.png`;
    }

    changePlayer() {
        this.currentPlayer === 1 ? this.currentPlayer++ : this.currentPlayer--;
        this.coinToss();
    }

    setPlayerNames(){
        for(let i = 0; i < this.players.length; i++) {
            document.querySelector(`#name-${i+1}`).textContent = this.players[i].name;
        }
    }

    resetWindowScore() {
        for(let i = 1; i <= 2; i++) {
            document.querySelector(`#score-${i}`).textContent = 0;
            document.querySelector(`#current-${i}`).textContent = 0;
        }
    }

    //rand number between 1-6
    rollDice(max, min = 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class Player {

    constructor(name, score = 0){
        this.name = name || 'Not Set.';
        this.score = score;
    }
}

var Marv = new Player('Marv', 0)
var Mark = new Player('Mark', 0)

var pGame = new PigGame(100, 0, Marv, Mark);
pGame.init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    pGame.play();
});

document.querySelector('.btn-new').addEventListener('click',function(){
    pGame.reset();
});


/*
function updateTurn(player) {

    if(setWhoGoesFirst === 1) {

        p1.className += ' active';
        p2.classList.remove('active');
    } else {

        p2.className += ' active';
        p1.classList.remove('active');
    }
}



function updateCurrentScore(score) {
    document.querySelector(`#current-${setWhoGoesFirst}`).textContent = score;
}

function saveCurrentScore(score) {
    if( setWhoGoesFirst === 1 ) {

        playerOneScore += score;
        document.querySelector(`#score-${setWhoGoesFirst}`).textContent = playerOneScore;
        alertWinner(playerOneScore, 'Player 1')

    } else {
        playerTwoScore += score;
        document.querySelector(`#score-${setWhoGoesFirst}`).textContent = playerTwoScore;
        alertWinner(playerOneScore, 'Player 2')
    }
}

function alertWinner(score, player) {
    if(score >= 100) { alert('Player 1 is the winner!') }
}

function resetGame() {
    score = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    setWhoGoesFirst = (Math.floor(Math.random() * (2 - 1 + 1))) + 1;
    document.querySelector(`#score-1`).textContent = 0;
    document.querySelector(`#score-2`).textContent = 0;
    document.querySelector(`#current-1`).textContent = 0;
    document.querySelector(`#current-2`).textContent = 0;
    updateTurn(setWhoGoesFirst);
}

*/